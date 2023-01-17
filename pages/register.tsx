import React, { useContext, useEffect, useState } from "react";
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { yupResolver } from '@hookform/resolvers/yup';
import { auth, db } from "../config/firebase";
import axios from "axios";
import SignOutButton from "../components/auth/SignOutButton";
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { collection, doc, addDoc, getDoc, setDoc } from "firebase/firestore";
import { useRouter } from 'next/router'
import { AuthContext } from "../context/AuthContext";

function Register() {
    // async function getUsers() {
    //     const querySnapshot = await getDocs(collection(db, "users"));
    //     querySnapshot.forEach((doc) => {
    //         console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
    //     });
    // }
    // getUsers()
    const router = useRouter()
    const [userInfos, setUserInfos] = useState({
        handle: "",
        password: "",
        email: "",
    });
    const { user, registration, registerError } = useContext(AuthContext);

    const schema = yup.object({
        handle: yup.string().required("Handle is required."),
        email: yup.string().required("Email is required.").email("Email is not valid."),
        password: yup.string().required('Password is required').min(6, "Password must be at least 6 characters"),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords don't match"),
    }).required();


    const { register, handleSubmit, setValue, setError, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    if (user) {
        axios.post("/api/register/", userInfos)
            .then((res) => console.log(res.data))
    }

    const createUser = async () => {
        const docRef = doc(db, "users", userInfos.handle);

        const docSnap = await getDoc(docRef);
        //if handle is not available, we set an error message
        if (docSnap.exists()) {
            return setError("handle", { type: 'custom', message: 'Handle is already taken.' })
        }

        registration(userInfos.email, userInfos.password);

        //if we get an error, then email is already taken
        if (Object.keys(Object(registerError)).length > 0) {
            setError("email", { type: 'custom', message: 'Email is already taken.' })
        }

    }

    useEffect(() => {
        if (user) {
            router.push("/");
        }
    })
    console.log(user)
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
export default Register;