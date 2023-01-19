import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";

function Navbar() {

    const [currentUser] = useAuthState(auth)

    return (
        <nav>
            <Link href="/">
                Home
            </Link>

            {currentUser ? (
                <Link href="/profile">
                    Profile
                </Link>
            ) : (
                <>
                    <Link href="/register">
                        Register
                    </Link>
                    <Link href="/login">
                        Login
                    </Link>
                </>
            )}

        </nav>
    )
}
export default Navbar;