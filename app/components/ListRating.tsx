import { Rating } from "@mui/material";

import Avatar from "@/app/components/Avatar";
import Heading from "@/app/components/Heading";
import { ProductData, Reviews } from "@/global.types";

import { Horizontal } from "../product/[productId]/ProductDetails";

type ListRatingProps = {
    product: ProductData
}

const ListRating: React.FC<ListRatingProps> = ({product}) =>{
    return <div>
        <Heading title="Product Review"/>
        <div className="text-sm mt-2">
            {product.reviews && product.reviews.map((review: Reviews)=>{
                return <div key={review.userId} className="max-w-300px">
                    <div className="flex gap-2 items-center">
                        <Avatar />
                        <div className="font-semibold">{review?.userName}</div>
                    </div>
                    <div className="mt-2">
                        <Rating value={review.rating} readOnly/>
                        <div className="ml-2">{review.comment}</div>
                        <Horizontal />
                     </div>
                </div>
            })}
        </div>
    </div>
}

export default ListRating;