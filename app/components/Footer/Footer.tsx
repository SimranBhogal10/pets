import Link from "next/link";

import { getCategoriesWithIcons } from "@/utils/getCategories";

import Container from "../Container";
import FooterList from "./FooterList";
import { MdFacebook } from "react-icons/md";
import { AiFillInstagram, AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";

const Footer = () => {

    const categories = getCategoriesWithIcons();

    return <footer className="bg-indigo-500 text-white text-md mt-16">
        <Container>
            <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
                <FooterList>
                    <h3 className="text-lg font-bold mb-2">Shop Categories</h3>
                    {categories.map(item =>
                        <Link href='#' key={item.categoryName}>
                            {item.categoryName}
                        </Link>
                    )}
                </FooterList>
                <FooterList>
                    <h3 className="text-lg font-bold mb-2">Customer Service</h3>
                    <Link href="#">Contact Us</Link>
                </FooterList>
                <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <h3 className="text-lg font-bold mb-2">About Us</h3>
                <p className="mb-2">Welcome to VR Pets, your ultimate destination for all pets things! At VR Pets, we believe that pets are family, and we are dedicated to providing you with the best products and services to keep your furry, feathered, and finned friends happy and healthy.</p>
                <p className="font-bold">&copy; {new Date().getFullYear()} VR Pets. All rights reserved.</p>
                </div>
                <FooterList>
                <h3 className="text-lg font-bold mb-2">Follow Us</h3>
                <div className="flex gap-4">
                    <Link href="#">
                        <MdFacebook size={26}/>
                    </Link>
                    <Link href="#">
                        <AiFillTwitterCircle size={26}/>
                    </Link>
                    <Link href="#">
                        <AiFillInstagram size={26}/>
                    </Link>
                    <Link href="#">
                        <AiFillYoutube size={26}/>
                    </Link>
                </div>
                </FooterList>
            </div>
        </Container>
    </footer>
}

export default Footer;