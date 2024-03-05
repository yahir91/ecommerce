'use client'

import Link from "next/link";
// import { RegisterForm } from "@/components/Auth";
// import { Seo } from "@/components/Shared";
import styles from "./sign-up.module.scss";
import JoinLayout from "../../../layouts/JoinLayout/JoinLayout";

export default function SignUpPage() {
  return (
    <>
      {/* <Seo title="Registrarse" /> */}

      <JoinLayout>
        <div className={styles.signIn}>
          <h3>Create account</h3>
          {/* <RegisterForm /> */}

          <div className={styles.actions}>
            <Link href="/join/sign-in">Back</Link>
          </div>
        </div>
      </JoinLayout>
    </>
  );
}
