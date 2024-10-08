import { usePathname, useSearchParams } from "next/navigation";

import { getCategoriesWithIcons } from "@/utils/getCategories";

import Category from "./Category";
import Container from "./Container";
import { Suspense } from "react";

const Categories = () =>{

    const params = useSearchParams();
    const category = params?.get('category');

    const pathName = usePathname();

    const isMainPage = pathName == '/';

    if(!isMainPage) return null;

    const categories = getCategoriesWithIcons();

    return <div className="bg-white">
        <Container>
        <Suspense fallback={<div>Loading...</div>}>
            <div className="p-2 flex flex-row items-center justify-between overflow-x-auto">
                {categories.map((item)=>(
                    <Category key={item.categoryName} label={item.categoryName} icon={item.icon} selected={category == item.categoryName || (category==null && item.categoryName=='All')}/>
                ))}
            </div>
            </Suspense>
        </Container>
    </div>
}

export default Categories;