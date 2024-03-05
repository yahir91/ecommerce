"use client";

import Link from "next/link";
// import { LoginForm } from "@/components/Auth";
// import { Seo } from "@/components/Shared";
import styles from "./sign-in.module.scss";
import JoinLayout from "../../../layouts/JoinLayout/JoinLayout";
import LoginForm from "../../../components/Auth/LoginForm/LoginForm";

const SignInPage = () => {
  return (
    <>
      {/* <Seo title="Iniciar sesión" /> */}

      <JoinLayout>
        <div className={styles.signIn}>
          <h3>Sign in</h3>
          <LoginForm />

          <div className={styles.actions}>
            <Link href="/join/sign-up">Don't have a account?</Link>
          </div>
        </div>
      </JoinLayout>
    </>
  );
};

export default SignInPage;
