// "use client";

// import Link from "next/link";

// const Links = [
//   { label: 'My Trips', href: '/trips' },
//   { label: 'Favorites', href: '/favorites' },
//   { label: 'Reservations', href: '/reservations' },
//   { label: 'My Properties', href: '/properties' },
// ];

// const UserMenuLinks = ({ onClick }) => {
//   return (
//     <div className="flex flex-col">
//       {Links.map((link) => (
//         <Link
//           key={link.href}
//           href={link.href}
//           onClick={onClick} 
//           className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-black transition-colors capitalize font-medium"
//           role="menuitem"
//         >
//           {link.label}
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default UserMenuLinks;



"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Plane, Heart, ClipboardList, Home, Settings } from 'lucide-react';
import { Fragment } from "react";
const Links = [
  { label: 'My Trips', href: '/account?tab=trips', icon: Plane, value: 'trips' },
  { label: 'Favorites', href: '/account?tab=favorites', icon: Heart, value: 'favorites' },
  { label: 'Reservations', href: '/account?tab=reservations', icon: ClipboardList, value: 'reservations' },
  { label: 'My Properties', href: '/account?tab=properties', icon: Home, value: 'properties' },
  { label: 'Settings', href: '/account?tab=settings', icon: Settings, value: 'settings' }, // الإضافة هنا
];

const UserMenuLinks = ({ onClick }) => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col py-1">
      {Links.map((link) => {
        const Icon = link.icon;
        const isActive = pathname === link.href;

        return (

            <Fragment key={link.value}>
                {link.value === 'settings' && <div className="h-[1px] bg-gray-100 my-0" />}
                <Link
                        key={link.href}
                        href={link.href}
                        onClick={onClick}
                        className={`
                        group flex items-center gap-3 px-5 py-3 text-sm transition-all duration-200
                        ${isActive 
                            ? "bg-gray-50 text-black font-semibold border-l-4 border-black" 
                            : "text-gray-600 hover:bg-gray-50 hover:text-black hover:pl-6"}
                        `}
                        role="menuitem"
                    >
                        <Icon 
                        size={18} 
                        className={`transition-colors ${isActive ? "text-black" : "text-gray-400 group-hover:text-black"}`} 
                        />
                        <span>{link.label}</span>
                    </Link>
            </Fragment>
          
        );
      })}
    </div>
  );
};

export default UserMenuLinks;