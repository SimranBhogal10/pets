'use client'

import ProductCard from "@/app/components/ProductCard";
import { ProductData } from "@/global.types";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type Product = {
    id: number;
    name: string;
    category: string;
    subcategory: string;
    price: number;
    stock: number;
    description: string;
    brand: string;
    image: string;
}

async function fetchProductsByCategory(category: string) {
  const res = await fetch( `/listing?category=${category}`);
  const productData = await res.json();
  return productData.products;
}

const ProductList = ({data}: any)=> {

  const [products, setProducts] = useState(data);
  const searchParams = useSearchParams();
  const category = searchParams.get('category');

  useEffect(()=>{
    if(category){
      fetchProductsByCategory(category).then(setProducts).catch(console.error);
    }
    else{
      setProducts(data);
    }
  },[category, data])
    
    return (
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 justify-items-center">
                {products.map((product: ProductData) => 
                    <li key={product.id}><ProductCard data={product}/></li>
                )}
            </ul>
    )
}

export default ProductList;

