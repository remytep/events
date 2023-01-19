import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import SignOutButton from "../components/auth/SignOutButton";
import { auth } from "../config/firebase";

export default function Home() {
  const [currentUser] = useAuthState(auth);

  console.log(currentUser)

  return (
    <div>
      {
        currentUser ?
          <>
            <img
              src={currentUser.photoURL?.toString()}
              referrerPolicy="no-referrer"
            />
            <p>Registered User: {currentUser.email}</p>
            <SignOutButton />

          </>
          :
          <p>Index</p>

      }


    </div >
  );

}