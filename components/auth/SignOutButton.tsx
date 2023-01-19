import { useSignOut } from 'react-firebase-hooks/auth';
import { auth } from '../../config/firebase';
import { useRouter } from 'next/router';
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
        <button
            onClick={async () => {
                await signOut();
            }}
        >
            Sign out
        </button>
    );
};
export default SignOutButton;