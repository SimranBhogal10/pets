import { ProductData } from "@/global.types";
import { NextResponse } from "next/server";

export const GET = async (req: Request) =>{
    const { searchParams } = new URL(req.url);
    const category = searchParams.get('category');
    console.log(category);
    let filteredProducts;

    const productData = await fetch(`https://storage.googleapis.com/testing-sb6.appspot.com/SB6/Users/simran/products.json`);
    const petProducts = await productData.json();

    if(category=='All'){
        return NextResponse.json({ products: petProducts });
    }
    else if(category){
        filteredProducts = petProducts.filter((item: ProductData) =>
            item.category.toLowerCase().includes(category.toLowerCase())
        );
        console.log("filteredProducts", filteredProducts);
        return NextResponse.json({ products: filteredProducts });
    }
}
