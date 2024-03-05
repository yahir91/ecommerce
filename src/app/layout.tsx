import type { Metadata } from "next";
import "semantic-ui-css/semantic.min.css";

export const metadata: Metadata = {
  title: "E-commerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
