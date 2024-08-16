import { Rating } from "@mui/material"
import Image from "next/image"
import Link from 'next/link'

import { ProductData, Reviews } from "@/global.types";
type ProductProps = {
    data: ProductData; 
}

const ProductCard : React.FC<ProductProps> = ({data}) => {

    const productRatings: number = data.reviews.reduce((acc:number, item:Reviews) => item.rating + acc, 0) / data.reviews.length;

    return (
        <Link href={`/product/${data.id}`}>
        <div className="col-span-1 cursor-pointer border-[1.5px] border-indigo-200 rounded-sm p-6 text-center text-sm transition hover:scale-105 w-[250px]">
            <div className="flex flex-col item-center w-full">
                <div className="aspect-square overflow-hidden relative w-full">
                    <Image fill src={data.image} className="w-full h-full object-contain" alt={data.name}/>
                </div>
                <div className="text-[16px] font-semibold">{data.name}</div>
                <div className="mt-2">
                    <Rating value={productRatings} readOnly/>
                </div>
                <div>{data.reviews.length} reviews</div>
                <div className="font-bold mt-2 text-xl">${data.price}</div>
                
                    <button className="p-2 border-[1.2px] rounded-md bg-indigo-300 mt-4">View More</button>
                {/* </Link> */}
            </div>
        </div>
        </Link>
    )
}

export default ProductCard;