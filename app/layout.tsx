import type { Metadata } from "next";
import "./style/globals.css";
import { fontInter } from "@/lib/font";
import { cn } from "@/lib/utils";
import metadataInfos from "@/lib/metadata";

export const metadata: Metadata = metadataInfos;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(fontInter.className, "p-minimal-size text-white-1")}>
        {children}
      </body>
    </html>
  );
}
