import { CartProductType } from "@/app/components/CartHandler";

export const handleCheckout = (cartProducts: CartProductType[])=>{
    let allItems: CartProductType[] = [];
    const orders = localStorage.getItem('orders');
    if (orders) {
        try {
          const parsedOrders: CartProductType[] = JSON.parse(orders);
          allItems = [...parsedOrders, ...cartProducts];
        } catch (error) {
          console.error('Error parsing orders from localStorage:', error);
          allItems = [...cartProducts];
        }
      } else {
        allItems = [...cartProducts];
      }
      localStorage.setItem('orders', JSON.stringify(allItems));
      localStorage.setItem('products', JSON.stringify([]))
    };