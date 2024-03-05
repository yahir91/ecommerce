"use client";

import "@/scss/global.scss";
import "semantic-ui-css/semantic.min.css";
import { TurnOffDefaultPropsWarning } from "../components/Error/Error";
import { AuthProvider } from "../contexts/AuthContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
        <TurnOffDefaultPropsWarning />
        {children}
        </AuthProvider>
      </body>
    </html>
  );
}
