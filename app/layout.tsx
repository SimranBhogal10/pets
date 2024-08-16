import "./globals.css";

import type { Metadata } from "next";
import { Maven_Pro } from "next/font/google";
import { Toaster } from "react-hot-toast";

import Footer from "@/app/components/Footer/Footer";
import NavBar from "@/app/components/NavBar";
import AuthProvider from "@/providers/AuthProvider";
import { Suspense } from "react";
import Loading from "./loading";

const maven = Maven_Pro({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-Pets",
  description: "Your One-Stop Pet Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={maven.className}>
        <Toaster toastOptions={{
          style:{
            background: 'rgb(51 65 85)',
            color:' #fff',
          }
        }}/>
             <div className="flex flex-col min-h-screen">
                  <NavBar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
      </body>
    </html>
  );
}
