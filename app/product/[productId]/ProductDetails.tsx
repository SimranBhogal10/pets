import { Rating } from "@mui/material";
import Image from "next/image";

import CartHandler from "@/app/components/CartHandler";
import { ProductData, Reviews } from "@/global.types";
import AuthProvider from "@/providers/AuthProvider";
import CartProvider from "@/providers/CartProvider";

type ProductDetailsProp = {
    product: ProductData
}

export const Horizontal = () => {
    return <hr className="w-[30%] my-2"/>
}

const ProductDetails:React.FC<ProductDetailsProp> = ({product}) =>{

    const productRatings:number = product.reviews?.reduce((acc:number, item:Reviews) => item.rating + acc, 0) / product.reviews.length;

    const productInStock = product.stock > 0 ? 'In Stock' : 'Out of Stock';

    return (
        <AuthProvider>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative">
                <Image fill src={product.image} className="sm:min-h-[400px]" alt={product.name} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
            </div>
            <div className="flex flex-col gap-1 text-slate-500 text-sm py-4">
                <h2 className="text-4xl font-medium text-slate-700">{product.name}</h2>
                <div className="py-4 flex items-center gap-2">
                    <Rating value={productRatings} readOnly/>
                    <div>{product.reviews.length==1 ? '1 review' : `${product.reviews.length} reviews`}</div>
                </div>
                <Horizontal />
                <div className="text-justify py-4">{product.description}</div>
                <Horizontal />
                <div className="py-4">
                    <span className="uppercase font-semibold">Category:</span> {product.category}
                </div>
                <div className="py-4">
                    <span className="uppercase font-semibold">Sub Category:</span> {product.subcategory}
                </div>
                <div className="py-4">
                    <span className="uppercase font-semibold">Brand:</span> {product.brand}
                </div>
                <div className={product.stock > 0 ? "text-teal-500":"text-rose-500"}>{productInStock}</div>
                <Horizontal />
                <CartProvider>
                    <CartHandler product={product}/>
                </CartProvider>
            </div>
        </div>
        </AuthProvider>
    )
}

export default ProductDetails;