import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./background.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Arthur Portfolio",
  description: "Portfolio made with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} minimal-size`}>{children}</body>
    </html>
  );
}




// avec parallax useref il existe un truc genre scroll to
