'use client'

import Image from "next/image";
import Link from "next/link";
import { BiSupport } from "react-icons/bi";

import AuthProvider  from "@/providers/AuthProvider";

import CartCount from "./CartCount";
import Categories from "./Categories";
import Container from "./Container";
import UserMenu from "./UserMenu";
import { Suspense } from "react";

const NavBar = () => {

    return(
    <AuthProvider>
        <div className="sticky top-0 w-full bg-indigo-200 z-30 shadow-md">
        <div className="py-2">
            <Container>
                <div className="flex items-center justify-between gap-3 md:gap-0">
                    <Link href='/'>
                        <Image src="/assets/clogo.png" alt="Company Logo" width={70} height={70} priority={true}/>
                    </Link>
                    {/* <div className="hidden md:block">Search</div> */}
                    <ul className="flex items-center gap-8 md:gap-12">
                        <li><Link href="/contact"><BiSupport size={30} className="text-slate-700"/></Link></li>
                        <li><CartCount /></li>
                        <li><UserMenu /></li>
                    </ul>
                </div>
            </Container>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
            <Categories />
        </Suspense>
    </div>
    </AuthProvider>
    )
}

export default NavBar;