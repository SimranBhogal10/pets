import { NextResponse } from "next/server";

import { petProducts } from "@/utils/products";

export const GET = (req: Request) =>{
    const { searchParams } = new URL(req.url);
    const category = searchParams.get('category');
    console.log(category);
    let filteredProducts;

    if(category=='All'){
        return NextResponse.json({ products: petProducts });
    }
    else if(category){
        filteredProducts = petProducts.filter((item) =>
            item.category.toLowerCase().includes(category.toLowerCase())
        );
        console.log(filteredProducts);
        return NextResponse.json({ products: filteredProducts });
    }
}
