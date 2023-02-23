import React, { useContext, useEffect, useState } from "react";
import { useAuthState, useUpdateProfile } from "react-firebase-hooks/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { auth, db, storage } from "../config/firebase";
import axios from "axios";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { collection, doc, query, where } from "firebase/firestore";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { useDownloadURL } from "react-firebase-hooks/storage";
import { AuthContext } from "../context/AuthContext";
import { ref } from "@firebase/storage";
import { Input, Button, Loading } from "@nextui-org/react";
import styles from "../styles/Auth.module.css";
import SignInWithGoogleButton from "../components/auth/SignInWithGoogleButton";

function Register() {
  const [downloadURL, downloadLoading, downloadError] = useDownloadURL(
    ref(storage, "users/default.jpg")
  );
  const [userInfos, setUserInfos] = useState({
    handle: "",
    password: "",
    email: "",
  });
  const [user] = useAuthState(auth);
  const { registration, registerError } = useContext(AuthContext);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const [loading, setLoading] = useState(false);

  const schema = yup
    .object({
      handle: yup
        .string()
        .required("Handle is required.")
        .min(3, "Handle must be at least 3 characters.")
        .matches(/^[a-zA-Z0-9_-]+$/, "Handle is not valid."),
      email: yup
        .string()
        .required("Email is required.")
        .email("Email is not valid."),
      password: yup
        .string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters."),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords don't match"),
    })
    .required();

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  //check if user handle is already registered
  const [value, userLoading, error] = useCollection(
    query(collection(db, "user"), where("handle", "==", userInfos.handle)),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  const createUser = () => {
    setLoading(true);
    //console.log(Object([value])[0]["docs"][0]?.data())
    // if handle is not available, we set an error message
    if (Object([value])[0]["docs"][0]?.data()) {
      setLoading(false);
      return setError("handle", {
        type: "custom",
        message: "Handle is already taken.",
      });
    }

    registration(userInfos.email, userInfos.password);
  };

  useEffect(() => {
    //if the user is created, we can store his information
    if (user && !Object(user).displayName) {
      updateProfile({ displayName: userInfos.handle, photoURL: downloadURL });
      axios
        .post(
          "/api/user/",
          Object.assign(userInfos, { photoURL: downloadURL, id: user.uid })
        )
        .then((res) => console.log(res.data));
    }
    //if we get an error, then email is already taken
    if (Object.keys(Object(registerError)).length > 0) {
      setLoading(false);
      setError("email", { type: "custom", message: "Email is already taken." });
    }
  }, [registerError, user]);

  return (
    <form className={styles.form} onSubmit={handleSubmit(createUser)}>
      <div>
        <Input
          {...register("handle")}
          label="Handle"
          placeholder="Handle"
          helperText={Object(errors.handle).message?.toString()}
          onChange={(e) => {
            setUserInfos({ ...userInfos, handle: e.target.value });
          }}
          fullWidth
        />
      </div>

      <div>
        <Input
          {...register("email")}
          label="Email"
          placeholder="Email"
          helperText={Object(errors.email).message?.toString()}
          onChange={(e) => {
            setUserInfos({ ...userInfos, email: e.target.value });
          }}
          fullWidth
        />
      </div>
      <div>
        <Input.Password
          {...register("password")}
          label="Password"
          placeholder="Password"
          helperText={Object(errors.password).message?.toString()}
          onChange={(e) => {
            setUserInfos({ ...userInfos, password: e.target.value });
          }}
          fullWidth
        />
      </div>

      <div>
        <Input.Password
          {...register("confirmPassword")}
          label="Confirm Password"
          placeholder="Confirm password"
          helperText={Object(errors.confirmPassword).message?.toString()}
          fullWidth
        />
      </div>

      <div style={{ marginTop: "50px" }} className="flex flex-col">
        <Button
          className={styles["nextui-button"]}
          disabled={loading ? true : false}
          type="submit"
        >
          {loading ? <Loading color="currentColor" size="sm" /> : "Register"}
        </Button>
        <span style={{ margin: "5px 0" }} className="text-center text-light">
          - or -
        </span>
        <SignInWithGoogleButton />
      </div>
    </form>
  );
}
export async function getServerSideProps() {
  return {
    props: { guest: true },
  };
}

export default Register;
