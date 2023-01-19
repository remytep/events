import '../styles/globals.css'
import type { AppProps } from 'next/app'
import AuthProvider, { AuthContext } from '../context/AuthContext'
import { useContext } from 'react';
import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../config/firebase';
import Navbar from '../components/Navbar';
export default function App({ Component, pageProps }: AppProps) {

  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  if (!user && !loading && pageProps.user) {
    router.push("/login");
  }
  if (user && !loading && pageProps.guest) {
    router.push("/");
  }

  return (
    <AuthProvider>
      <Navbar />
      <Component {...pageProps} />
    </AuthProvider>
  )

}
