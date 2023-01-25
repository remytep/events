import Head from "next/head";
import React, { Fragment, useState } from "react";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config/firebase";
import { Poppins } from "@next/font/google";
import { Transition, Dialog } from "@headlessui/react";
import styles from "../../styles/Header.module.css";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

function Header() {
  const [drawerMenuOpen, setDrawerMenuOpen] = useState(false);
  const [currentUser] = useAuthState(auth);

  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <svg
            id="logo-70"
            width="78"
            height="30"
            viewBox="0 0 78 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.5147 0C15.4686 0 12.5473 1.21005 10.3934 3.36396L3.36396 10.3934C1.21005 12.5473 0 15.4686 0 18.5147C0 24.8579 5.14214 30 11.4853 30C14.5314 30 17.4527 28.7899 19.6066 26.636L24.4689 21.7737C24.469 21.7738 24.4689 21.7736 24.4689 21.7737L38.636 7.6066C39.6647 6.57791 41.0599 6 42.5147 6C44.9503 6 47.0152 7.58741 47.7311 9.78407L52.2022 5.31296C50.1625 2.11834 46.586 0 42.5147 0C39.4686 0 36.5473 1.21005 34.3934 3.36396L15.364 22.3934C14.3353 23.4221 12.9401 24 11.4853 24C8.45584 24 6 21.5442 6 18.5147C6 17.0599 6.57791 15.6647 7.6066 14.636L14.636 7.6066C15.6647 6.57791 17.0599 6 18.5147 6C20.9504 6 23.0152 7.58748 23.7311 9.78421L28.2023 5.31307C26.1626 2.1184 22.5861 0 18.5147 0Z"
              className="ccustom"
              fill="#FFFFFF"
            ></path>
            <path
              d="M39.364 22.3934C38.3353 23.4221 36.9401 24 35.4853 24C33.05 24 30.9853 22.413 30.2692 20.2167L25.7982 24.6877C27.838 27.8819 31.4143 30 35.4853 30C38.5314 30 41.4527 28.7899 43.6066 26.636L62.636 7.6066C63.6647 6.57791 65.0599 6 66.5147 6C69.5442 6 72 8.45584 72 11.4853C72 12.9401 71.4221 14.3353 70.3934 15.364L63.364 22.3934C62.3353 23.4221 60.9401 24 59.4853 24C57.0498 24 54.985 22.4127 54.269 20.2162L49.798 24.6873C51.8377 27.8818 55.4141 30 59.4853 30C62.5314 30 65.4527 28.7899 67.6066 26.636L74.636 19.6066C76.7899 17.4527 78 14.5314 78 11.4853C78 5.14214 72.8579 0 66.5147 0C63.4686 0 60.5473 1.21005 58.3934 3.36396L39.364 22.3934Z"
              className="ccustom"
              fill="#FFFFFF"
            ></path>
          </svg>
        </Link>
        <div className={`${poppins.className} ${styles.navbar}`}>
          <p
            className={`${styles.navbarTitle} ${styles.navbarButton}` + " z-40"}
            onClick={() => setDrawerMenuOpen(true)}
          >
            Menu
          </p>
          {/* Desktop navbar */}
          <nav className={`${styles.navbarDesktop}`}>
            {currentUser ? (
              <>
                <Link href="/hangout">Hangouts</Link>
                <Link href={`/member/${currentUser?.displayName}`} >Profile</Link>
              </>
            ) : (
              <>
                <Link href="/login">Login</Link>
                <Link href="/register">Register</Link>
              </>
            )}
          </nav>
        </div>
      </header>
      {/* Mobile Nav */}
      <Transition.Root show={drawerMenuOpen} as={Fragment}>
        <Dialog as="div" onClose={setDrawerMenuOpen} className={styles.dialog}>
          <Transition.Child
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className={styles.drawer}>
                <div className={styles.header}>
                  <svg
                    id="logo-70"
                    width="78"
                    height="30"
                    viewBox="0 0 78 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ visibility: "hidden" }}
                  >
                    <path
                      d="M18.5147 0C15.4686 0 12.5473 1.21005 10.3934 3.36396L3.36396 10.3934C1.21005 12.5473 0 15.4686 0 18.5147C0 24.8579 5.14214 30 11.4853 30C14.5314 30 17.4527 28.7899 19.6066 26.636L24.4689 21.7737C24.469 21.7738 24.4689 21.7736 24.4689 21.7737L38.636 7.6066C39.6647 6.57791 41.0599 6 42.5147 6C44.9503 6 47.0152 7.58741 47.7311 9.78407L52.2022 5.31296C50.1625 2.11834 46.586 0 42.5147 0C39.4686 0 36.5473 1.21005 34.3934 3.36396L15.364 22.3934C14.3353 23.4221 12.9401 24 11.4853 24C8.45584 24 6 21.5442 6 18.5147C6 17.0599 6.57791 15.6647 7.6066 14.636L14.636 7.6066C15.6647 6.57791 17.0599 6 18.5147 6C20.9504 6 23.0152 7.58748 23.7311 9.78421L28.2023 5.31307C26.1626 2.1184 22.5861 0 18.5147 0Z"
                      className="ccustom"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M39.364 22.3934C38.3353 23.4221 36.9401 24 35.4853 24C33.05 24 30.9853 22.413 30.2692 20.2167L25.7982 24.6877C27.838 27.8819 31.4143 30 35.4853 30C38.5314 30 41.4527 28.7899 43.6066 26.636L62.636 7.6066C63.6647 6.57791 65.0599 6 66.5147 6C69.5442 6 72 8.45584 72 11.4853C72 12.9401 71.4221 14.3353 70.3934 15.364L63.364 22.3934C62.3353 23.4221 60.9401 24 59.4853 24C57.0498 24 54.985 22.4127 54.269 20.2162L49.798 24.6873C51.8377 27.8818 55.4141 30 59.4853 30C62.5314 30 65.4527 28.7899 67.6066 26.636L74.636 19.6066C76.7899 17.4527 78 14.5314 78 11.4853C78 5.14214 72.8579 0 66.5147 0C63.4686 0 60.5473 1.21005 58.3934 3.36396L39.364 22.3934Z"
                      className="ccustom"
                      fill="#FFFFFF"
                    ></path>
                  </svg>
                  <div className={`${poppins.className} ${styles.navbar}`}>
                    <p
                      className={styles.navbarTitle}
                      onClick={() => setDrawerMenuOpen(false)}
                    >
                      Close
                    </p>
                  </div>
                </div>
                <div className={styles.drawerContainer}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={styles.userIcon}
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <hr />
                  {/* Mobile navbar */}
                  <nav className={styles.drawerNav}>
                    {currentUser ? (
                      <>
                        <Link href="/hangout" className={styles.drawerNavLink}>
                          Hangouts
                        </Link>
                        <Link href={`/member/${currentUser?.displayName}`} className={styles.drawerNavLink}>
                          Profile
                        </Link>
                      </>
                    ) : (
                      <>
                        <Link href="/login" className={styles.drawerNavLink}>
                          Log In
                        </Link>
                        <Link href="/register" className={styles.drawerNavLink}>
                          Register
                        </Link>
                      </>
                    )}
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}

export default Header;
