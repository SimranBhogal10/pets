import Container from "@/app/components/Container";
import HomeBanner from "@/app/components/HomeBanner";

import ProductList from "./listing/ProductList";
import { Suspense } from "react"; 
import { NextResponse } from "next/server";

// export async function generateMetadata() {

//   return {
//     title: `Homepage - VR Pets`,
//     description: `Buy pet products at VR Pets . Best quality at the best price.`,
//     openGraph: {
//       title: `Homepage - VR Pets`,
//       description: `Buy pet products at VR Pets. Best quality at the best price.`,
//       url: `https://pets-umber.vercel.app/`,
//       images: [
//         {
//           url: "https://ogcdn.net/e4b8c678-7bd5-445d-ba03-bfaad510c686/v4/pets-umber.vercel.app/E-Pets/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fimages%2F32b39a13-877d-47d0-801d-aae3c088620a.png%3Ftoken%3DWTySFHYdY24NPR38yqdC_rYqq2SK9szIxOYnf8tfM8g%26height%3D872%26width%3D1080%26expires%3D33260206216/og.png",
//           width: 800,
//           height: 600,
//           alt: 'Homepage',
//         },
//       ],
//       type: 'website',
//     },
//   };
// }

export default async function Home() {

  if(!process.env.NEXT_PUBLIC_CLOUD_STORAGE_URL){
    return NextResponse.error();
  }
  const productData = await fetch(process.env.NEXT_PUBLIC_CLOUD_STORAGE_URL,{
    cache: 'no-store'
  });
  const data = await productData.json();
  return (
      <div className="p-12">
        <Container>
            <HomeBanner />
            <Suspense fallback={<div>Loading...</div>}>
              <ProductList data = {data}/>
            </Suspense>
        </Container>
      </div>
  )
}



