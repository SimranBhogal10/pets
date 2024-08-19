import { ProductData } from "@/global.types";
import { NextResponse } from "next/server";

export const GET = async (req: Request) =>{
    const { searchParams } = new URL(req.url);
    const category = searchParams.get('category');
    console.log(category);
    let filteredProducts;

    const CLOUD_STORAGE_URL = process.env.NEXT_PUBLIC_CLOUD_STORAGE_URL;

    if(!CLOUD_STORAGE_URL){
        return NextResponse.error();
    }

    const productData = await fetch(CLOUD_STORAGE_URL);
    const petProducts = await productData.json();

    // if(category=='All'){
    //     return NextResponse.json({ products: petProducts });
    // }
    if(category){
        filteredProducts = petProducts.filter((item: ProductData) =>
            item.category.toLowerCase().includes(category.toLowerCase())
        );
        console.log("filteredProducts", filteredProducts);
        return NextResponse.json({ products: filteredProducts });
    }
}
