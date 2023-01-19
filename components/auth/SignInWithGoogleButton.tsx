import axios from "axios";
import { doc } from "firebase/firestore";
import { useRouter } from "next/router";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth, db } from "../../config/firebase";

const SignInWithGoogleButton = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const router = useRouter();
    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (loading) {
        return <p>Loading...</p>;
    }

    if (user) {
        axios.post("/api/register/", {
            handle: user.user.displayName,
            email: user.user.email,
        })
            .then((res) => {
                router.push("/");
            })
    }

    return (
        <button onClick={() => signInWithGoogle()}>Sign In with Google</button>
    );
}
export default SignInWithGoogleButton;

