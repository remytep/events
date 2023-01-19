import React, { useContext, useEffect, useState } from "react";
import { useAuthState, useUpdateProfile } from 'react-firebase-hooks/auth';
import { auth, db, storage } from "../config/firebase";
import * as yup from 'yup';
import { useRouter } from 'next/router'
import { useDownloadURL, useUploadFile } from 'react-firebase-hooks/storage';
import { ref } from 'firebase/storage';
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../context/AuthContext";

function Profile() {
    // async function getUsers() {
    //     const querySnapshot = await getDocs(collection(db, "users"));
    //     querySnapshot.forEach((doc) => {
    //         console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
    //     });
    // }
    // getUsers()
    const router = useRouter();
    const [userInfos, setUserInfos] = useState({
        email: "",
        password: "",
    });

    const schema = yup.object({
        email: yup.string().required("Email is required.").email("Email is not valid."),
        password: yup.string().required('Password is required').min(6, "Password must be at least 6 characters"),
    }).required();

    // const [user] = useAuthState(auth);
    const { user } = useContext(AuthContext);
    const [updateProfile, updating, error] = useUpdateProfile(auth);

    const storageRef = ref(storage, "users/" + user?.displayName);
    const [uploadFile, uploading, snapshot, uploadError] = useUploadFile();
    const [value, loading, downloadError] = useDownloadURL(ref(storage, "users/" + user?.displayName));
    const [selectedFile, setSelectedFile] = useState<File>();

    useEffect(() => {
        if (selectedFile) {
            uploadFile(storageRef, selectedFile, {
                contentType: 'image/jpeg'
            })

            if (!uploadError) {
                updateProfile({ displayName: user?.displayName, photoURL: value })
                user.reload();

            }
            setSelectedFile(undefined);
        }

        console.log(uploading, snapshot, uploadError)
    }, [selectedFile])


    console.log(user)

    if (user)
        return (
            <>
                {/* {uploadError && <strong>Error: {uploadError.message}</strong>}
                {uploading && <span>Uploading file...</span>}
                {snapshot && <span>Snapshot: {JSON.stringify(snapshot)}</span>}
                {selectedFile && <span>Selected file: {selectedFile.name}</span>} */}
                <label htmlFor="upload">
                    <img
                        style={{ width: "150px", height: "150px", objectFit: "cover" }}
                        src={Object(user).photoURL?.toString()}
                        referrerPolicy="no-referrer"
                    />
                </label>
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
                <div>
                    <input
                        type="text"
                        placeholder="Email"
                        defaultValue={Object(user).displayName?.toString()}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Email"
                        defaultValue={Object(user).email?.toString()}
                    />
                </div>
            </>


        )
}
export default Profile;