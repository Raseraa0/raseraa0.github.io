import type { Metadata } from "next";
import "./style/globals.css";
import { fontInter } from "@/lib/font";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Arthur Rasera Portfolio | Software Developer",
  description:
    "Portfolio of Arthur Rasera, software engineer passionate about web development, artificial intelligence, and SAP systems. Explore my projects, skills, and professional experience.",
  keywords: [
    "Arthur Rasera",
    "web developer",
    "portfolio",
    "Next.js",
    "React",
    "artificial intelligence",
    "SAP development",
    "DevOps",
    "Python",
    "TypeScript",
    "C++",
    "software engineer",
  ],
  authors: [{ name: "Arthur", url: "https://github.com/Raseraa0/" }],
  creator: "Arthur",
  publisher: "Arthur",
  openGraph: {
    title: "Arthur Rasera Portfolio | Software Developer",
    description:
      "Discover the portfolio of Arthur Rasera: web apps with Next.js, AI projects using Python, low-level and SAP development, and DevOps tools.",
    url: "https://raseraa0.github.io",
    siteName: "Arthur Rasera Portfolio",
    images: [
      {
        url: "https://raseraa0.github.io/preview.png", // Replace with your real image URL
        width: 1856,
        height: 928,
        alt: "Preview of Arthur Rasera's developer portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.png",
  },
  metadataBase: new URL("https://raseraa0.github.io"),
};

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
