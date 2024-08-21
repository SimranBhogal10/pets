import Container from "@/app/components/Container";
import HomeBanner from "@/app/components/HomeBanner";

import ProductList from "./listing/ProductList";
import { Suspense } from "react"; 
import { NextResponse } from "next/server";

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



