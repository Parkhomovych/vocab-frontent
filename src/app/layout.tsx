import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vocab",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-auth-mobile bg-no-repeat bg-right-bottom">
        {children}
      </body>
    </html>
  );
}
