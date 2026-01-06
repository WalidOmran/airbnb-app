"use client";
import Link from "next/link"
import {MagnifyingGlassCircleIcon, GlobeAltIcon, Bars3Icon } from '@heroicons/react/24/solid';
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import MobileSearchBar from "./MobileSearchBar";
import UserMenu from "../UserMenu";

const Navbar = ({placeholder}) => {
    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    const [openMobileSearchBar, setOpenMobileSearchBar] = useState(false);
    
    const toggleMenu =  () => {
        setOpenMobileMenu( prev => {
            if (!prev) setOpenMobileSearchBar(false);
            return !prev;
        })
    };
    const toggleSearch = () => {
        setOpenMobileSearchBar( prev => {
            if (!prev) setOpenMobileMenu(false);
            return!prev;
        });
     };
    
  return (
  
        <nav className="bg-white pt-1 "  role="navigation" aria-label="Main navigation">
            <ul className="flex justify-end items-center space-x-2" aria-label="Navigation links">
                <li className="hidden md:inline-flex" aria-label="">
                    <UserMenu />
                    {/* <SignInButton /> */}

                </li>
                <li className="pl-2 md:hidden">
                    <button className="cursor-pointer" onClick={toggleSearch} role="button" aria-label="Toggle mobile Search Bar">
                        <MagnifyingGlassCircleIcon className='h-6' />
                    </button>
                </li>
                <li className="pl-2 md:pl-6">
                    <button className="cursor-pointer" role="button" aria-label="Select language" >
                        <GlobeAltIcon className='h-6' />
                    </button>
                </li>
                <li className="pl-2 md:pl-6">
                    <button className="cursor-pointer" onClick={toggleMenu} role="button"  aria-label="Toggle mobile menu">
                        <Bars3Icon className='h-6' />
                    </button> 
                
                </li>
                
            </ul>
            {openMobileMenu && <MobileMenu onClose={() => setOpenMobileMenu(false)} />}
            {openMobileSearchBar && <MobileSearchBar placeholder={placeholder} onClose={() => setOpenMobileSearchBar(false)} />}
        </nav>
    
  )
}


export default Navbar
