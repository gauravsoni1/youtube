import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Appbar from "../components/Appbar/Appbar";
import Footer from "../components/Footer/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "CineMax",
  description: "CineMax booking application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen flex flex-col`}
      >
        <Appbar />
        <main className="bg-slate-50 p-6 grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
