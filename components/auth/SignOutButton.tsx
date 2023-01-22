import { useSignOut } from 'react-firebase-hooks/auth';
import { auth } from '../../config/firebase';
import { useRouter } from 'next/router';
import { Button } from '@nextui-org/react';
import styles from "../../styles/Profile.module.css"

const SignOutButton = () => {
    const [signOut, loading, error] = useSignOut(auth);
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
    return (
        <Button
            className={styles["nextui-button"]}

            onPress={async () => {
                await signOut();
            }}
        >
            Sign out
        </Button>
    );
};
export default SignOutButton;