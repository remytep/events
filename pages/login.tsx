import React, { useContext, useEffect, useState } from "react";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { Input, Button, Loading } from '@nextui-org/react';
import { AuthContext } from "../context/AuthContext";
import styles from "../styles/Auth.module.css"
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
    const [loading, setLoading] = useState(false);

    const { register, handleSubmit, setValue, setError, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });


    const signUp = async () => {
        setLoading(true);
        const success = await login(userInfos.email, userInfos.password)
        if (loginError && Object.keys(Object(loginError["customData"])).length > 0) {
            setLoading(false);
            return setError("password", { type: 'custom', message: "Too many attempts, please try again later." })
        }
        if (!success) {
            setLoading(false);
            setError("password", { type: 'custom', message: "Wrong credentials." })
        }
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(signUp)}>
            <div>
                <Input
                    {...register('email')}
                    label="Email"
                    placeholder="Email"
                    helperText={Object(errors.email).message?.toString()}
                    onChange={(e) => {
                        setUserInfos({ ...userInfos, email: e.target.value });
                    }}
                    fullWidth
                />
            </div>
            <div>
                <Input.Password
                    {...register('password')}
                    label="Password"
                    placeholder="Password"
                    helperText={Object(errors.password).message?.toString()}
                    onChange={(e) => {
                        setUserInfos({ ...userInfos, password: e.target.value });
                    }}
                    fullWidth
                />
            </div>

            <div style={{ marginTop: "50px" }} className="flex flex-col">
                <Button
                    className={styles["nextui-button"]}
                    disabled={loading ? true : false}
                    type="submit"
                >
                    {loading ?
                        <Loading color="currentColor" size="sm" />
                        :
                        "Login"
                    }
                </Button>
                <span style={{ margin: "5px 0" }} className="text-center text-light">- or -</span>
                <SignInWithGoogleButton />
            </div>
        </form>
    )
}

export async function getServerSideProps() {
    return {
        props: { guest: true }
    };
}

export default Login;
