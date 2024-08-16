import { IconType } from "react-icons";
import { AiFillShop } from "react-icons/ai";
import { FaBowlFood } from "react-icons/fa6";
import { GiPlasticDuck } from "react-icons/gi";
import { MdOutlinePets } from "react-icons/md";
import { PiHairDryerFill } from "react-icons/pi";
import { TbWood } from "react-icons/tb";

import { petProducts } from "./products";

type categoryIconsType = {
    [icon:string]:IconType
};

export const getCategoriesWithIcons = () =>{

    const uniqueCategories = Array.from(new Set(petProducts.map((product) => product.category)));
    uniqueCategories.unshift('All');

    const categoryIcons:categoryIconsType = {
        'Food': FaBowlFood,
        'Accessories': MdOutlinePets,
        'Toys': GiPlasticDuck,
        'Furniture': TbWood,
        'Grooming': PiHairDryerFill,
        'All': AiFillShop
      };

    const categoriesWithIcons = uniqueCategories.map(category => {
        return {
          categoryName: category,
          icon: categoryIcons[category]
        };
      });

       return categoriesWithIcons;
    }