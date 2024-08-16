'use client'

import ProductCard from "@/app/components/ProductCard";
import { ProductData } from "@/global.types";
import { useRouter, useSearchParams } from "next/navigation";
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

const ProductList = () => {
    const params = useSearchParams();
    const router = useRouter();
    let category = params?.get('category');

    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (!category) {
          category ='All';
        }
    
        const fetchProducts = async () => {
          try {
            const response = await fetch(`/listing?category=${category}`);
            if (!response.ok) {
              throw new Error(`Error: ${response.status}`);
            }
            const data = await response.json();
            setProducts(data.products);
          } catch (error) {
            console.log(error);
          }
        };
    
        fetchProducts();
      }, [category, router]);

    return (
            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 justify-items-center">
                {products.map((product: ProductData) => 
                    <li key={product.id}><ProductCard data={product}/></li>
                )}
            </ul>
    )
}

export default ProductList;