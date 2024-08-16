import Container from "@/app/components/Container";
import HomeBanner from "@/app/components/HomeBanner";

import ProductList from "./listing/ProductList";
import { Suspense } from "react"; // Suspense wouldn't be idea.

export default function Home() {

  return (
      <div className="p-12">
        <Container>
          <Suspense fallback={<div>Loading...</div>}>
            <HomeBanner />
            <ProductList />
          </Suspense>
        </Container>
      </div>
  )
}



