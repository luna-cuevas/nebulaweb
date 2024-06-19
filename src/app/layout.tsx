import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "../components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nebula - Web Dev & Design",
  description:
    "Nebula is a web development and design agency that specializes in building websites and web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} dark:bg-gray-300 bg-white`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
