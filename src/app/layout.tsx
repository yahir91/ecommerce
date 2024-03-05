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
  // Override console.error
  // This is a hack to suppress the warning about missing defaultProps in recharts library as of version 2.12
  // @link https://github.com/recharts/recharts/issues/3615
  const error = console.error;
  console.error = (...args: any) => {
    if (/defaultProps/.test(args[0])) return;
    error(...args);
  };
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
