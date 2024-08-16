import Container from "@/app/components/Container";
import { ProductData } from "@/global.types";
import { petProducts } from "@/utils/products";

import ListRating from "../../components/ListRating";
import ProductDetails from "./ProductDetails";

type ProductParams = {
    productId:string
}

const Product = ({params} : {params: ProductParams}) =>{
    console.log(params);

    const product: ProductData | undefined = petProducts.find((item) => item.id == params.productId);



    return (<div className="p-8">
        {
            product &&
                <Container>
                <ProductDetails product ={product}/>
                    <div className="flex flex-col mt-20 gap-4">
                        <div>Add rating</div>
                        <ListRating product={product}/>
                    </div>
                </Container>
        }
    </div>)
}

export default Product;