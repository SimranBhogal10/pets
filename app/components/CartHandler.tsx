'use client'

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { MdCheckCircle } from "react-icons/md";

import { ProductData } from "@/global.types";
import { useAuth } from "@/hooks/useAuth";
import { useCart } from "@/hooks/useCart";
import AuthProvider from "@/providers/AuthProvider";

import Button from "./Button";
import SetQuantity from "./SetQuantity";

type CartHandlerProp = {
    product: ProductData
}

export type CartProductType = {
    id: string,
    name: string,
    description: string,
    category: string,
    brand: string,
    quantity: number,
    price: number,
    image: string,
    stock: number,
}

const CartHandler:React.FC<CartHandlerProp> = ({product}) =>{

    const {handleAddProductToCart, cartProducts} = useCart();
    const {isLoggedIn} = useAuth();

    // console.log("isLoggedIn from cart:::::", isLoggedIn);

    const [isProductInCart, setIsProductInCart] = useState(false);

    const [cartProduct, setCartProduct] = useState<CartProductType>({
        id: product.id,
        name: product.name,
        description: product.description,
        category: product.category,
        brand: product.brand,
        quantity: 1,
        price: product.price,
        image: product.image,
        stock: product.stock,
    })

    console.log(cartProducts);

    useEffect(() =>{
        setIsProductInCart(false);

        if(cartProducts){
            const existingIndex = cartProducts.findIndex((item) => item.id === product.id);

            if(existingIndex>-1){
                setIsProductInCart(true);
            }
        }
    }, [cartProducts]);

    const handleQuantityIncrease = useCallback(() =>{

        if(cartProduct.quantity == product.stock) return;

        setCartProduct((prev) =>{
            return {...prev, quantity: prev.quantity+1}
        })
    }, [cartProduct])

    const handleQuantityDecrease = useCallback(() =>{

        if(cartProduct.quantity == 1) return;

        setCartProduct((prev) =>{
            return {...prev, quantity: prev.quantity-1}
        })
    }, [cartProduct])


    return <div>
        {isProductInCart ? (<>
                    <p className="mb-4 text-slate-500 flex items-center gap-1">
                        <MdCheckCircle size={20} className="text-teal-400"/>
                        <span>Added to cart</span>
                    </p>
                  <Link href={`/cart`}>
                    <button className="w-full max-w-[300px] p-2 border-[1.2px] rounded-md bg-indigo-300 text-black">View Cart</button>
                  </Link>
                </>): (<>
                    <SetQuantity cartProduct={cartProduct} handleQuantityIncrease={handleQuantityIncrease} handleQuantityDecrease={handleQuantityDecrease}/>
                <div className="max-w-[300px] py-8">
                    <Button label="Add to cart" onClick={() => {isLoggedIn ? handleAddProductToCart(cartProduct): toast.error('Please login first')}} />
                </div>
                </>)}
    </div>
    // </AuthProvider>
}

export default CartHandler;