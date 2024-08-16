import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

import { CartProductType } from "@/app/components/CartHandler";

import { useAuth } from "./useAuth";


type CartContextType = {
    cartTotalQty: number,
    cartTotalAmount: number,
    cartProducts: CartProductType[] | null,
    handleAddProductToCart:(product: CartProductType) => void,
    handleRemoveProductFromCart:(product: CartProductType) => void,
    handleCartQtyIncrease:(product: CartProductType) => void,
    handleCartQtyDecrease:(product: CartProductType) => void,
    handleClearCart:() => void,
}

export type Props = {
    [propName:string]: any
}

export const CartContext = createContext<CartContextType | null>(null);

export const CartContextProvider = (props: Props) => {

    const [cartTotalAmount, setCartTotalAmount] = useState(0);
    const [cartTotalQty, setCartTotalQty] = useState(0);
    const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(null);
    // const {isLoggedIn} = useAuth();

    console.log('qty', cartTotalQty);
    console.log('amount', cartTotalAmount);


    useEffect(() =>{
        const cartItems: string | null= localStorage.getItem('products');
        let cProducts: CartProductType[] | null=[]
        
        if(cartItems)
            cProducts = JSON.parse(cartItems);

        setCartProducts(cProducts)
    }, [])

    useEffect(()=>{
        const getTotals = () => {

            if(cartProducts){
                const {total, qty} = cartProducts?.reduce((acc, item)=>{
                    const itemTotal = item.price * item.quantity;
                    acc.total += itemTotal
                    acc.qty += item.quantity
    
                    return acc
                }, {
                    total: 0,
                    qty: 0,
                })
                setCartTotalQty(qty);
                setCartTotalAmount(total);
            };
            }
        getTotals();
    }, [cartProducts])

    const handleAddProductToCart = useCallback((product: CartProductType) => {
            setCartProducts((prev) =>{
                let updatedCart;
    
                if(prev){
                    updatedCart=[...prev, product]
                }
                else updatedCart = [product];
    
                toast.success('Yayyy! Product added to cart')
                localStorage.setItem('products', JSON.stringify(updatedCart));
                return updatedCart;
            })
    }, []);

    const handleRemoveProductFromCart = useCallback((product: CartProductType) => {

        if(cartProducts){
            const filteredProducts = cartProducts.filter((item) => item.id!== product.id);

            setCartProducts(filteredProducts);
            toast.success('Product removed from cart')
            localStorage.setItem('products', JSON.stringify(filteredProducts));
        }
    }, [cartProducts]);

    const handleCartQtyIncrease = useCallback((product: CartProductType)=>{
        let updatedCart;
        if(product.quantity == product.stock){
            return toast.error('Cart limit reached.')
        }

        if(cartProducts){
            updatedCart = [...cartProducts]

            const existingIndex = cartProducts.findIndex((item) => item.id === product.id)

            if(existingIndex > -1){
                updatedCart[existingIndex].quantity += 1;
            }

            setCartProducts(updatedCart);
            localStorage.setItem('products', JSON.stringify(updatedCart));
        }
    }, [cartProducts]);
    
    const handleCartQtyDecrease = useCallback((product: CartProductType)=>{
        let updatedCart;
        if(product.quantity == 1){
            return toast.error('Cart limit reached.')
        }

        if(cartProducts){
            updatedCart = [...cartProducts]

            const existingIndex = cartProducts.findIndex((item) => item.id === product.id)

            if(existingIndex > -1){
                updatedCart[existingIndex].quantity -= 1;
            }

            setCartProducts(updatedCart);
            localStorage.setItem('products', JSON.stringify(updatedCart));
        }
    }, [cartProducts]);
    
    const handleClearCart = useCallback(()=>{
        setCartProducts(null);
        setCartTotalQty(0);
        localStorage.setItem('products', JSON.stringify(null));
    },[cartProducts])

    const value = {
        cartTotalQty,
        cartTotalAmount,
        cartProducts,
        handleAddProductToCart,
        handleRemoveProductFromCart,
        handleCartQtyIncrease,
        handleCartQtyDecrease,
        handleClearCart,
    }

    return <CartContext.Provider value={value} {...props}/>
}

export const useCart = ( ) => {
    const context = useContext(CartContext);

    if(context == null) throw new Error("use cart must be used within the cart context provider");

    return context;
}