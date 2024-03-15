"use client";

import Link from "next/link";
import RegisterForm from "../../../components/Auth/RegisterForm/RegisterForm";
import JoinLayout from "../../../layouts/JoinLayout/JoinLayout";
import styles from "./sign-up.module.scss";

export default function SignUpPage() {
  return (
      <JoinLayout>
        <div className={styles.signIn}>
          <h3>Create account</h3>
          <RegisterForm />

          <div className={styles.actions}>
            <Link href="/join/sign-in">Back</Link>
          </div>
        </div>
      </JoinLayout>
  );
}
