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
    const [focusIndex, setFocusIndex] = useState(-1);
    const menuItems = isLoggedIn
      ? ['My Orders', 'Logout']
      : ['Login', 'Sign Up'];

    useEffect(() => {
        if (isOpen && focusIndex !== -1) {
            document.getElementById(`menu-item-${focusIndex}`)?.focus();
          }
        if (typeof window !== 'undefined') {
            const isUserLoggedIn = localStorage.getItem("isUserLoggedIn");
            if (isUserLoggedIn=='true')
                setIsLoggedIn(true);
            }
    }, [focusIndex, isOpen, setIsLoggedIn]);

    const toggleOpen = useCallback(() =>{
        setIsOpen((prev) => !prev)
    },[]);

    const handleKeyDown = (event: React.KeyboardEvent<Element>) => {
        if (event.key === 'ArrowDown') {
            setFocusIndex((prev) => {
              const nextIndex = (prev + 1) % menuItems.length;
              document.getElementById(`menu-item-${nextIndex}`)?.focus();
              return nextIndex;
            });
          } else if (event.key === 'ArrowUp') {
            setFocusIndex((prev) => {
              const nextIndex = (prev - 1 + menuItems.length) % menuItems.length;
              document.getElementById(`menu-item-${nextIndex}`)?.focus();
              return nextIndex;
            });
          } else if (event.key === 'Escape') {
            toggleOpen();
          } else if (event.key === 'Enter') {
            document.getElementById(`menu-item-${focusIndex}`)?.click();
          }
      };

 return (<>
 <div className="relative z-30">
    <button onClick={toggleOpen} className="p-2 border-[1px] border-indigo-400 flex flex-row items-center gap-1 rounded-full cursor-pointer hover:shadow-md transition text-slate-700" aria-expanded={isOpen}
          aria-controls="dropdown-menu"
          aria-haspopup="menu"
          onKeyDown={handleKeyDown}>
        <Avatar />
        <AiFillCaretDown />
    </button>
    {isOpen &&(
        <div id="dropdown-menu" className="absolute rounded-md shadow-md w-[170px] bg-white overflow-hidden right-0 top-12 text-sm flex flex-col cursor-pointer" role="menu" onKeyDown={handleKeyDown}>
           {isLoggedIn ? ( <>
                <Link href="/" id="menu-item-0" role="menuitem"  tabIndex={focusIndex === 0 ? 0 : -1}>
                    <MenuItem onClick={toggleOpen}>My Orders</MenuItem>
                </Link>
                <Link href="/login" id="menu-item-1" role="menuitem" tabIndex={focusIndex === 1 ? 0 : -1}>
                    <MenuItem onClick={() =>{toggleOpen(); logout()}}>Logout</MenuItem>
                </Link>
            </>):(
                <>
                <Link href="/login" id="menu-item-0" role="menuitem" tabIndex={focusIndex === 0 ? 0 : -1}>
                    <MenuItem onClick={toggleOpen}>Login</MenuItem>
                </Link>
                <Link href="/register" id="menu-item-1" role="menuitem" tabIndex={focusIndex === 1 ? 0 : -1}>
                    <MenuItem onClick={toggleOpen}>Sign Up</MenuItem>
                </Link>
            </>
            )}
        </div>
    )}
 </div>
 {isOpen ? <BackDrop onClick={toggleOpen}/> : null}
 </>)
}

export default UserMenu