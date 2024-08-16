'use client'

import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import { VscSmiley } from "react-icons/vsc";

import Button from "@/app/components/Button";
import Heading from "@/app/components/Heading";
import { useAuth } from "@/hooks/useAuth";
import { useCart } from "@/hooks/useCart";
import { handleCheckout } from "@/utils/handleCheckout";

import ItemContent from "../components/ItemContent";

const CartClient = () =>{

    const {cartProducts, handleClearCart, cartTotalAmount} = useCart();
    const {isLoggedIn} = useAuth();
    // const isUserLoggedIn = localStorage.getItem('isUserLoggedIn');
    console.log(isLoggedIn)

    if(!isLoggedIn || (!cartProducts || cartProducts.length === 0)){
        return <div className="flex flex-col items-center">
            <div className="text-2xl">Your cart is empty</div>
            <div>
                <Link href={"/"} className="text-slate-500 flex items-center gap-2 mt-2">
                    <VscSmiley />
                    <span>Start Shopping</span>
                </Link>
            </div>
        </div>
    }

    return <div>
        <Heading title="Shopping Cart" center/>
        <div className="grid grid-cols-5 text-xs gap-4 pb-2 items-center mt-8 uppercase">
            <div className="col-span-2 justify-self-start">Product</div>
            <div className="justify-self-center">Price</div>
            <div className="justify-self-center">Quantity</div>
            <div className="justify-self-end">Total</div>
        </div>
        <div>
            {cartProducts && cartProducts.map((item) =>{
                return <ItemContent key={item.id} item={item}/>
            })}
        </div>
        <div className="border-t-[1.5px] border-indigo-200 py-4 flex justify-between gap-4">
            <div className="w-[150px]">
                <Button label="Remove Cart items" onClick={() =>handleClearCart()} small/>
            </div>
            <div className="text-sm flex flex-col gap-1 items-start">
                    <div className="flex justify-between w-full text-base font-semibold">
                        <span>Subtotal</span>
                        <span>${cartTotalAmount.toFixed(2)}</span>
                    </div>
                    <p className="text-xs text-slate-500">*Taxes and Convenience calculated at checkout</p>
                    <Link href={"/checkout"} className="w-full">
                        <Button label="Checkout" onClick={() =>{handleCheckout(cartProducts)}}/>
                    </Link>
                    <Link href={"/"} className="text-slate-500 flex items-center gap-2 mt-2">
                        <MdArrowBack />
                        <span>Continue Shopping</span>
                    </Link>
            </div>
        </div>
    </div>
}

export default CartClient;