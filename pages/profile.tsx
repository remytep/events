import React, { useContext, useEffect, useState } from "react";
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import { useUpdateEmail } from 'react-firebase-hooks/auth';
import { auth, db, storage } from "../config/firebase";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useRouter } from 'next/router'
import { useForm } from "react-hook-form";
import { useDocument } from 'react-firebase-hooks/firestore';
import { useDownloadURL, useUploadFile } from 'react-firebase-hooks/storage';
import { ref } from 'firebase/storage';
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../context/AuthContext";
import { Input, Textarea, Button, Image } from '@nextui-org/react';
import SignOutButton from "../components/auth/SignOutButton";
import axios from "axios"
import { doc } from "@firebase/firestore";

function Profile() {
    const [userInfos, setUserInfos] = useState({
        handle: "",
        email: "",
        presentation: ""
    });
    const [defaultValues, setDefaultValues] = useState({
        handle: "",
        email: "",
        presentation: ""
    });
    const schema = yup.object({
        handle: yup.string().required("Handle is required.").min(3, "Handle must be at least 3 characters."),
        email: yup.string().required("Email is required.").email("Email is not valid."),
    }).required();
    const [docValue, valueLoading, docError] = useDocument(
        doc(db, 'users', Object(userInfos).handle || "%"),
        {
            snapshotListenOptions: { includeMetadataChanges: true },
        }
    );

    const { register, handleSubmit, setValue, setError, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const { user, reload } = useContext(AuthContext);
    const [updateProfile, updating, error] = useUpdateProfile(auth);
    const storageRef = ref(storage, "users/" + user?.uid);
    const [uploadFile, uploading, snapshot, uploadError] = useUploadFile();
    const [value, loading, downloadError] = useDownloadURL(ref(storage, "users/" + user?.uid));
    const [selectedFile, setSelectedFile] = useState<File>();
    const [updateEmail, emailUpdating, emailError] = useUpdateEmail(auth);


    useEffect(() => {
        if (user) {
            let obj = {
                handle: user.displayName,
                email: user.email,
                presentation: user.presentation
            };
            setUserInfos(obj);
            setDefaultValues(obj);
        }

        if (emailError && !emailUpdating) {

        }

        if (selectedFile) {
            uploadFile(storageRef, selectedFile, {
                contentType: 'image/jpeg'
            }).then(() => {
                updateProfile({ displayName: user?.displayName, photoURL: value })
                reload();
            })
            setSelectedFile(undefined);
            console.log(user)
        }

    }, [user, selectedFile])

    const update = async () => {
        if (docValue?.data() && defaultValues.handle !== user.displayName) {
            return setError("handle", { type: 'custom', message: 'Handle is already taken.' })
        }
        const success = await updateEmail(userInfos.email);

        if (success) {
            updateProfile({ displayName: userInfos?.handle, photoURL: value || user?.photoURL })
            axios.put("/api/user", Object.assign(userInfos, { oldHandle: defaultValues.handle }))
                .then((res) => {
                    console.log(res)
                })
            //update default values
            setDefaultValues(userInfos)
        }
        else {
            return setError("email", { type: 'custom', message: 'Email is already taken.' })

        }
    }

    if (user)
        return (
            <>
                {/* {uploadError && <strong>Error: {uploadError.message}</strong>}
                {uploading && <span>Uploading file...</span>}
                {snapshot && <span>Snapshot: {JSON.stringify(snapshot)}</span>}
                {selectedFile && <span>Selected file: {selectedFile.name}</span>} */}
                <form onSubmit={handleSubmit(update)}>

                    <label htmlFor="upload">
                        <Image
                            showSkeleton
                            width={150}
                            height={150}
                            objectFit="contain"
                            src={Object(user).photoURL?.toString()}
                            referrerPolicy="no-referrer"
                        />
                    </label>
                    <SignOutButton />

                    {/* {!loading && value && (
                    <React.Fragment>
                        <span>Download URL: {value}</span>
                    </React.Fragment>
                )} */}

                    <input
                        id="upload"
                        hidden
                        type="file"
                        onChange={(e) => {
                            const file = e.target.files ? e.target.files[0] : undefined;
                            setSelectedFile(file);
                        }}
                    />
                    <div className="grid">
                        <Input
                            {...register("handle")}
                            label="Handle"
                            placeholder="Handle"
                            initialValue={Object(user).displayName?.toString()}
                            helperText={Object(errors.handle).message?.toString()}
                            onChange={(e) => {
                                setUserInfos({ ...userInfos, handle: String(e.target.value) })
                            }}
                        />

                        <Input
                            {...register("email")}
                            label="Email"
                            placeholder="Email"
                            initialValue={Object(user).email?.toString()}
                            helperText={Object(errors.email).message?.toString()}
                            onChange={(e) => {
                                setUserInfos({ ...userInfos, email: String(e.target.value) })
                            }}
                        />

                        <Textarea
                            label="Presentation"
                            placeholder="Presentation"
                            initialValue={Object(user).presentation?.toString()}
                            onChange={(e) => {
                                setUserInfos({ ...userInfos, presentation: String(e.target.value) })
                            }}
                        />

                    </div>
                    {JSON.stringify(defaultValues) !== JSON.stringify(userInfos)
                        && <Button type="submit">Edit</Button>
                    }
                </form>
            </>


        )
}
export async function getServerSideProps() {
    return {
        props: { user: true }
    };
}

export default Profile;