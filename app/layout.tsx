import type { Metadata } from "next";
import "./style/globals.css";
import { fontInter } from "@/lib/font";

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
      <body className={`${fontInter.className} p-minimal-size text-white-1`}>
        {children}
      </body>
    </html>
  );
}
