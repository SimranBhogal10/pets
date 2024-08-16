'use client'

import { CartProductType } from "@/app/components/CartHandler";

type SetQuantityProps = {
    cartCounter?:boolean,
    cartProduct: CartProductType,
    handleQuantityIncrease: () => void,
    handleQuantityDecrease: () => void
}

const btnStyles = 'border-[1.2px] border-slate-300 px-2 rounded'

const SetQuantity: React.FC<SetQuantityProps> = ({
    cartCounter, cartProduct, handleQuantityIncrease, handleQuantityDecrease
}) => {
    return <div className="flex gap-8 items-center">
        {cartCounter ? null : <div className="uppercase font-semibold">Quantity: </div>}
        <div className="flex gap-4 items-center text-base">
            <button className={btnStyles} onClick={handleQuantityDecrease}>-</button>
            <div>{cartProduct.quantity}</div>
            <button className={btnStyles} onClick={handleQuantityIncrease}>+</button>
        </div>
    </div>
}

export default SetQuantity;