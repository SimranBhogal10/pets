import Container from "@/app/components/Container";
import HomeBanner from "@/app/components/HomeBanner";

import ProductList from "./listing/ProductList";
import { Suspense } from "react"; // Suspense wouldn't be idea.

export default async function Home() {

  const productData = await fetch(`http://localhost:3000/listing/?category=All`);
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



