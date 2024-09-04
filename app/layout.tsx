import "./globals.css";

import type { Metadata } from "next";
import { Maven_Pro } from "next/font/google";
import { Toaster } from "react-hot-toast";

import Footer from "@/app/components/Footer/Footer";
import NavBar from "@/app/components/NavBar";
import AuthProvider from "@/providers/AuthProvider";
import { Suspense } from "react";
import Head from "next/head";

const maven = Maven_Pro({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-Pets",
  description: "Your One-Stop Pet Shop",
  openGraph:
  {
      title: `Homepage - VR Pets`,
      description: `Buy pet products at VR Pets. Best quality at the best price.`,
      url: `https://pets-umber.vercel.app/`,
      images: [
        {
          url: "https://ogcdn.net/e4b8c678-7bd5-445d-ba03-bfaad510c686/v4/pets-umber.vercel.app/E-Pets/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fimages%2F32b39a13-877d-47d0-801d-aae3c088620a.png%3Ftoken%3DWTySFHYdY24NPR38yqdC_rYqq2SK9szIxOYnf8tfM8g%26height%3D872%26width%3D1080%26expires%3D33260206216/og.png",
          width: 800,
          height: 600,
          alt: 'Homepage',
        },
      ],
      type: 'website',
    },
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
