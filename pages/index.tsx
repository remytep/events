import { useAuthState } from "react-firebase-hooks/auth";
import SignOutButton from "../components/auth/SignOutButton";
import { auth } from "../config/firebase";

export default function Home() {
  const [currentUser] = useAuthState(auth);
  console.log(currentUser)
  if (currentUser) {
    return (
      <div>
        <p>Registered User: {currentUser.email}</p>
        <SignOutButton />
      </div >
    );
  }
  return (
    <p>not connected</p>
  )
}
