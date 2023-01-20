import { createContext, PropsWithChildren, ReactNode, useEffect, useState } from "react";
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, db } from "../config/firebase";
import { getAuth } from "firebase/auth";
import { useDocument } from 'react-firebase-hooks/firestore';
import { doc } from "firebase/firestore";

const initialState = {
    user: Object(auth.currentUser),
    registration: (email: string, password: string) => { },
    login: (email: string, password: string) => { },
    reload: () => { },
    registerLoading: Boolean(),
    registerError: null,
    loginError: null,

};

export const AuthContext = createContext(initialState);

function AuthProvider({ children }: PropsWithChildren<{}>) {


    const [
        createUserWithEmailAndPassword,
        registerUser,
        registerLoading,
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

    const reload = () => {
        auth.currentUser?.reload();
    }

    let displayName = Object(auth.currentUser)?.displayName?.toString();

    const [value, loading, error] = useDocument(
        doc(db, 'users', displayName || "%"),
        {
            snapshotListenOptions: { includeMetadataChanges: true },
        }
    );

    return (
        <AuthContext.Provider value={{
            user: auth.currentUser ? Object.assign(Object(auth.currentUser), value?.data()) : null,
            registration,
            login,
            reload,
            registerLoading: registerLoading,
            registerError: Object(registerError),
            loginError: Object(loginError),
        }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;