import { useSignOut } from 'react-firebase-hooks/auth';
import { auth } from '../../config/firebase';

const SignOutButton = () => {
    const [signOut, loading, error] = useSignOut(auth);

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
                const success = await signOut();
                if (success) {
                    alert('You are sign out');
                }
            }}
        >
            Sign out
        </button>
    );
};
export default SignOutButton;