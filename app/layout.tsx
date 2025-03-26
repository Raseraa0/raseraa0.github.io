import type { Metadata } from "next";
import "./background.css";
import "./globals.css";
import { fontInter } from "@/public/font";


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
      <body className={`${fontInter.className} p-minimal-size`}>{children}</body>
    </html>
  );
}