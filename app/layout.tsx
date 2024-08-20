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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <Head>
        <title>VR Pets - Pet Store</title>
        <meta name="description" content={`Buy products for your fury friends. Best quality at the best price.`} />

        <meta property="og:title" content={`VR Pets`} />
        <meta property="og:description" content={`Buy products for your fury friends. Best quality at the best price.`} />
        <meta property="og:image" content='/assets/clogo.png' />
        <meta property="og:url" content='https://pets-umber.vercel.app/_next/image?url=%2Fassets%2Fclogo.png&w=256&q=75' />
        <meta property="og:type" content="product" />

        <meta property="og:url" content="https://pets-umber.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="VR Pets" />
        <meta property="og:description" content="Your One-Stop Pet Shop"/ >
        <meta property="og:image" content="https://pets-umber.vercel.app/_next/image?url=%2Fassets%2Fclogo.png&w=256&q=75" />

        <meta name="twitter:title" content={`VR Pets`} />
        <meta name="twitter:description" content={`Buy products for your fury friends. Best quality at the best price.`} />
        <meta name="twitter:image" content='https://pets-umber.vercel.app/_next/image?url=%2Fassets%2Fclogo.png&w=256&q=75' />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
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
