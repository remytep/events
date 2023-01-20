import React, { useContext, useEffect, useState } from "react";
import { useAuthState, useUpdateProfile } from 'react-firebase-hooks/auth';
import { yupResolver } from '@hookform/resolvers/yup';
import { auth, db, storage } from "../config/firebase";
import axios from "axios";
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { doc } from "firebase/firestore";
import { useDocument } from 'react-firebase-hooks/firestore';
import { useDownloadURL } from 'react-firebase-hooks/storage';
import { AuthContext } from "../context/AuthContext";
import { ref } from "@firebase/storage";

function Register() {
    const [downloadURL, downloadLoading, downloadError] = useDownloadURL(ref(storage, "users/default.jpg"));
    const [userInfos, setUserInfos] = useState({
        handle: "",
        password: "",
        email: "",
    });
    const [user] = useAuthState(auth);
    const [updateProfile, updating, error] = useUpdateProfile(auth);
    const { registration, registerError } = useContext(AuthContext);

    const schema = yup.object({
        handle: yup.string().required("Handle is required.").min(3, "Handle must be at least 3 characters").matches(/^[a-zA-Z0-9_-]+$/, "Handle is not valid."),
        email: yup.string().required("Email is required.").email("Email is not valid."),
        password: yup.string().required('Password is required').min(6, "Password must be at least 6 characters"),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords don't match"),
    }).required();

    const { register, handleSubmit, setValue, setError, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    //check if user handle is already registered
    const [value, loading, docError] = useDocument(
        doc(db, 'users', Object(user).uid || "%"),
        {
            snapshotListenOptions: { includeMetadataChanges: true },
        }
    );

    const createUser = () => {
        //if handle is not available, we set an error message
        if (value?.data()) {
            return setError("handle", { type: 'custom', message: 'Handle is already taken.' })
        }

        registration(userInfos.email, userInfos.password);
    }

    useEffect(() => {
        if (user && !Object(user).displayName) {
            updateProfile({ displayName: userInfos.handle, photoURL: downloadURL })
            axios.post("/api/user/", userInfos)
                .then((res) => console.log(res.data))
        }
        //if we get an error, then email is already taken
        if (Object.keys(Object(registerError)).length > 0) {
            setError("email", { type: 'custom', message: 'Email is already taken.' })
        }
    }, [registerError, user])

    return (
        <form onSubmit={handleSubmit(createUser)}>
            <div>
                <input
                    type="text"
                    {...register('handle')}
                    placeholder="Handle"
                    onChange={(e) => {
                        setUserInfos({ ...userInfos, handle: e.target.value });
                    }}
                />
                {errors.handle && (
                    <span>{errors.handle.message?.toString()}</span>
                )}
            </div>

            <div>
                <input
                    type="text"
                    {...register('email')}
                    placeholder="Email"
                    onChange={(e) => {
                        setUserInfos({ ...userInfos, email: e.target.value });
                    }}
                />
                {errors.email && (
                    <span>{errors.email.message?.toString()}</span>
                )}
                {/* {error && (
                    <span>Email is already taken.</span>
                )} */}
            </div>
            <div>
                <input
                    type="password"
                    {...register('password')}
                    placeholder="Password"
                    onChange={(e) => {
                        setUserInfos({ ...userInfos, password: e.target.value });
                    }}
                />
                {errors.password && (
                    <span>{errors.password.message?.toString()}</span>
                )}
            </div>

            <div>
                <input
                    type="password"
                    {...register('confirmPassword')}
                    placeholder="Confirm password"
                />
                {errors.confirmPassword && (
                    <span>{errors.confirmPassword.message?.toString()}</span>
                )}
            </div>



            <button type="submit">
                Register
            </button>
        </form>
    )
}
export async function getServerSideProps() {
    return {
        props: { guest: true }
    };
}

export default Register;