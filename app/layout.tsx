import type { Metadata } from "next";
import "./style/globals.css";
import { fontInter } from "@/lib/font";
import { cn } from "@/lib/utils";
import metadataInfos from "@/lib/metadata";
import { LanguageProvider } from "./contexts/language-context";
import { ThemeProvider } from "./contexts/themes-context";

export const metadata: Metadata = metadataInfos;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(fontInter.className, "p-minimal-size text-white-1 dark:text-blue-10")}>
        <LanguageProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
