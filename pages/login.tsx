import React, { useContext, useEffect, useState } from "react";
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { yupResolver } from '@hookform/resolvers/yup';
import { auth, db } from "../config/firebase";
import axios from "axios";
import SignOutButton from "../components/auth/SignOutButton";
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { collection, doc, addDoc, getDoc, setDoc } from "firebase/firestore";
import { useRouter } from 'next/router'
import { AuthContext } from "../context/AuthContext";
import SignInWithGoogleButton from "../components/auth/SignInWithGoogleButton";


function Login() {
    const [userInfos, setUserInfos] = useState({
        email: "",
        password: "",
    });

    const schema = yup.object({
        email: yup.string().required("Email is required.").email("Email is not valid."),
        password: yup.string().required('Password is required').min(6, "Password must be at least 6 characters"),
    }).required();

    const { login, loginError } = useContext(AuthContext);

    const { register, handleSubmit, setValue, setError, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });


    const signUp = () => {
        login(userInfos.email, userInfos.password)
        if (loginError && Object.keys(Object(loginError["customData"])).length > 0) {
            setError("password", { type: 'custom', message: "Too many attempts, please try again later." })
        }
        else if (Object.keys(Object(loginError)).length > 0) {
            setError("password", { type: 'custom', message: "Wrong credentials." })
        }
    }

    return (
        <form onSubmit={handleSubmit(signUp)}>
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

            <button type="submit">
                Login
            </button>
            <SignInWithGoogleButton />
        </form>
    )
}

export async function getServerSideProps() {
    return {
        props: { guest: true }
    };
}

export default Login;
