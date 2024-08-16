export type ProductData = {
    id: string;
    name: string;
    category: string;
    subcategory: string;
    price: number;
    stock: number;
    description: string;
    brand: string;
    image: string;
    reviews: Reviews[];
};

export type Reviews = {
    userId: number;
    userName: string;
    rating: number;
    comment: string;
}