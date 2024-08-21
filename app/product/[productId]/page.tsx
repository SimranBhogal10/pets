import Container from "@/app/components/Container";
import { ProductData } from "@/global.types";
import { petProducts } from "@/utils/products";

import ListRating from "../../components/ListRating";
import ProductDetails from "./ProductDetails";

type ProductParams = {
    productId:string
}

export async function generateMetadata({ params }: {params: ProductParams}) {
    const product = petProducts.find((item) => item.id == params.productId);

    if(product)
    return {
      title: `${product.name} - VR Pets`,
      description: `Buy ${product.name} at VR Pets . Best quality at the best price.`,
      openGraph: {
        title: `${product.name} - VR Pets`,
        description: `Buy ${product.name} at VR Pets. Best quality at the best price.`,
        url: `https://pets-umber.vercel.app/product/${params.productId}`,
        images: [
          {
            url: product.image,
            width: 800,
            height: 600,
            alt: product.name,
          },
        ],
        type: 'product',
      },
    };
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