import Link from "next/link";
import { VscSmiley } from "react-icons/vsc";

import Container from "../components/Container";

const Checkout = ()=>{
    return  <Container>
        <div className="flex flex-col items-center pt-4">
    <div className="text-2xl">Wohooo!! Your order is placed.</div>
    <div>
        <Link href={"/"} className="text-slate-500 flex items-center gap-2 mt-2">
            <VscSmiley />
            <span>Continue Shopping</span>
        </Link>
    </div>
</div>
    </Container>
}

export default Checkout;