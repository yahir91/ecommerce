"use client";

import Link from "next/link";
import LoginForm from "../../../components/Auth/LoginForm/LoginForm";
import JoinLayout from "../../../layouts/JoinLayout/JoinLayout";
import styles from "./sign-in.module.scss";

const SignInPage = () => {
  return (
    <JoinLayout>
      <div className={styles.signIn}>
        <h3>Sign in</h3>
        <LoginForm />

        <div className={styles.actions}>
          <Link href="/join/sign-up">Dont have a account?</Link>
        </div>
      </div>
    </JoinLayout>
  );
};

export default SignInPage;
