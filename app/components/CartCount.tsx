import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";

type CartCountProps = {
    count: number| undefined;
    loggedIn: string | null
}

const CartCount = () =>{
    
    return <Link href={'/cart'}>
        <div className="relative cursor-pointer">
            <div className="text-3xl">
                <FiShoppingCart size={30} className="text-slate-700"/>
            </div>
        </div>
    </Link>
}

export default CartCount;