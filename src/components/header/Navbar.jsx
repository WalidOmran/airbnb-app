"use client";
import { Search} from 'lucide-react'; 
import { useState } from "react";
import { useSession } from "next-auth/react";
import MobileMenu from "./MobileMenu";
import MobileSearchBar from "./SearchBar/MobileSearchBar";
import UserMenu from "../user/UserMenu";



const Navbar = ({ placeholder }) => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [openMobileSearchBar, setOpenMobileSearchBar] = useState(false);

  const toggleMenu = () => {
    setOpenMobileMenu(prev => {
      if (!prev) setOpenMobileSearchBar(false);
      return !prev;
    });
  };

  const toggleSearch = () => {
    setOpenMobileSearchBar(prev => {
      if (!prev) setOpenMobileMenu(false);
      return !prev;
    });
  };

  return (
    <nav className="flex items-center" role="navigation">
      <ul className="flex items-center gap-1 md:gap-4">
        
       
        <li className="md:hidden">
          <button 
            className="p-2.5 hover:bg-gray-100 rounded-full transition-all active:scale-90 text-gray-600"
            onClick={toggleSearch}
            aria-label="Search"
          >
            <Search size={22} strokeWidth={2} />
          </button>
        </li>
        <li>
           <UserMenu />
        </li>
      </ul>
      {openMobileSearchBar && <MobileSearchBar placeholder={placeholder} onClose={() => setOpenMobileSearchBar(false)} />}
    </nav>
  );
}

export default Navbar;