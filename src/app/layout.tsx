import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SiteNav from "@/components/SiteNav";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "João Francisco · Computer Engineer & Developer",
  description:
    "Personal website and CV of João Francisco, a Computer Engineering graduate working with Next.js, TypeScript, Python and PostgreSQL.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`${inter.className} min-h-full flex flex-col`}>
        <SiteNav />
        {children}
      </body>
    </html>
  );
}
