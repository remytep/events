import { createContext, PropsWithChildren, ReactNode, useState } from "react";
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";
import { getAuth } from "firebase/auth";

const initialState = {
    user: auth.currentUser,
    registration: (email: string, password: string) => { },
    login: (email: string, password: string) => { },
    registerError: null,
    loginError: null,
};

export const AuthContext = createContext(initialState);

function AuthProvider({ children }: PropsWithChildren<{}>) {

    const [state, setState] = useState(initialState);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        registerError,
    ] = useCreateUserWithEmailAndPassword(auth);

    const registration = (email: string, password: string) => {
        createUserWithEmailAndPassword(email, password)
    }

    const [
        signInWithEmailAndPassword,
        loginUser,
        loginLoading,
        loginError,
    ] = useSignInWithEmailAndPassword(auth);

    const login = (email: string, password: string) => {
        signInWithEmailAndPassword(email, password);
    }

    return (
        <AuthContext.Provider value={{
            user: auth.currentUser,
            registration,
            login,
            registerError: Object(registerError),
            loginError: Object(loginError),
        }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;