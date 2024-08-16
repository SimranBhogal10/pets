'use client'

import Image from "next/image";
import Link from "next/link";

import { useCart } from "@/hooks/useCart";

import { CartProductType } from "./CartHandler";
import SetQuantity from "./SetQuantity";

type ItemContentProps = {
    item: CartProductType
}

const ItemContent: React.FC<ItemContentProps> = ({item}) =>{

    const {handleRemoveProductFromCart, handleCartQtyIncrease, handleCartQtyDecrease} = useCart();

    return <div className="grid grid-cols-5 text-xs md:text-sm gap-4 border-t-[1.5px] border-indigo-200 py-4 items-center">
        <div className="col-span-2 justify-self-start flex gap-2 md:gap-4">
            <Link href={`/product/${item.id}`}>
                <div className="relative w-[70px] aspect-square">
                    <Image src={item.image} alt={item.name} fill className="object-contain"/>
                </div>
            </Link>
            <div className="flex flex-col justify-between">
                <Link href={`/product/${item.id}`}>
                    {item.name}
                </Link>
                <div className="w-[70px]">
                    <button className="text-slate-500 underline" onClick={() => handleRemoveProductFromCart(item)}>Remove</button>
                </div>
            </div>
        </div>
        <div className="justify-self-center">${item.price.toFixed(2)}</div>
        <div className="justify-self-center">
            <SetQuantity cartCounter={true} cartProduct={item} handleQuantityIncrease={() =>handleCartQtyIncrease(item)} handleQuantityDecrease={() =>handleCartQtyDecrease(item)}/>
        </div>
        <div className="justify-self-end font-semibold">
            ${(item.price * item.quantity)}
        </div>
    </div>
}

export default ItemContent;