import Container from "@/app/components/Container";
import AuthProvider from "@/providers/AuthProvider";
import CartProvider from "@/providers/CartProvider";

import CartClient from "./CartClient";

const Cart = () =>{
    return (
    <AuthProvider>
        <div className="pt-8">
        <CartProvider>
            <Container>
                <CartClient />
            </Container>
        </CartProvider>
    </div>
    </AuthProvider>
    )
}

export default Cart;