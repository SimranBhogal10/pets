import Container from "@/app/components/Container";
import HomeBanner from "@/app/components/HomeBanner";

import ProductList from "./listing/ProductList";
import { Suspense } from "react"; // Suspense wouldn't be idea.

export default async function Home() {

  const productData = await fetch(`https://storage.googleapis.com/testing-sb6.appspot.com/SB6/Users/simran/products.json`);
  const data = await productData.json();
  return (
      <div className="p-12">
        <Container>
            <HomeBanner />
            <ProductList data = {data}/>
        </Container>
      </div>
  )
}



