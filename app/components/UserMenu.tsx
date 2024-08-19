'use client'

import Link from "next/link";
import { useCallback, useEffect, useState } from "react"
import { AiFillCaretDown } from "react-icons/ai";

import { useAuth } from "@/hooks/useAuth";

import Avatar from "./Avatar";
import BackDrop from "./BackDrop";
import MenuItem from "./MenuItem";

const UserMenu = () =>{
    const [isOpen, setIsOpen] = useState(false);
    const {logout, isLoggedIn, setIsLoggedIn} = useAuth();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const isUserLoggedIn = localStorage.getItem("isUserLoggedIn");
            if (isUserLoggedIn=='true')
                setIsLoggedIn(true);
            }
    }, [isOpen, setIsLoggedIn]);

    const toggleOpen = useCallback(() =>{
        setIsOpen((prev) => !prev)
    },[]);;

 return (<>
 <div className="relative z-30">
    <div onClick={toggleOpen} className="p-2 border-[1px] border-indigo-400 flex flex-row items-center gap-1 rounded-full cursor-pointer hover:shadow-md transition text-slate-700">
        <Avatar />
        <AiFillCaretDown />
    </div>
    {isOpen &&(
        <div className="absolute rounded-md shadow-md w-[170px] bg-white overflow-hidden right-0 top-12 text-sm flex flex-col cursor-pointer">
           {isLoggedIn ? ( <div>
                <Link href="/">
                    <MenuItem onClick={toggleOpen}>My Orders</MenuItem>
                </Link>
                <MenuItem onClick={() =>{toggleOpen(); logout()}}>Logout</MenuItem>
            </div>):(
                <div>
                <Link href="/login">
                    <MenuItem onClick={toggleOpen}>Login</MenuItem>
                </Link>
                <Link href="/register">
                    <MenuItem onClick={toggleOpen}>Sign Up</MenuItem>
                </Link>
            </div>
            )}
        </div>
    )}
 </div>
 {isOpen ? <BackDrop onClick={toggleOpen}/> : null}
 </>)
}

export default UserMenu