import axios from "axios";
import { doc } from "firebase/firestore";
import { useRouter } from "next/router";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth, db } from "../../config/firebase";
import { Button, Loading } from "@nextui-org/react";
import styles from "../../styles/Auth.module.css"
import { GoogleIcon } from "../Icons/GoogleIcon";
import { useEffect } from "react";

const SignInWithGoogleButton = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (loading) {
        return <Loading />;
    }

    if (user && !loading) {
        axios.post("/api/user/", {
            id: user.user.uid,
            handle: user.user.displayName,
            email: user.user.email,
            photoURL: user.user.photoURL,
        })
    }


    return (
        <Button onPress={() => signInWithGoogle()} className={`${styles["nextui-button"]} ${styles["google"]}`} icon={<GoogleIcon filled={undefined} size={undefined} height={undefined} width={undefined} label={undefined} />} >
            Sign-in with Google
        </Button>
    );
}
export default SignInWithGoogleButton;

