"use client";

import "@/scss/global.scss";
import "semantic-ui-css/semantic.min.css";
import { TurnOffDefaultPropsWarning } from "../components/Error/Error";
import { AuthProvider } from "../contexts/AuthContext";
import { CartProvider } from "../contexts/CartContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <CartProvider>
            <TurnOffDefaultPropsWarning />
            {children}
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
