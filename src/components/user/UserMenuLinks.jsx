"use client";

import Link from "next/link";


const Links = ['trips', 'favorites', 'reservations', 'properties'];

const UserMenuLinks = () => {
    return Links.map( (link) => (
        <Link
            href={`/${link}`}
            className="block px-4 py-2 hover:bg-gray-100"
            role="menuitem"
            key={link}
            >
            {link}
        </Link>))
};

export default UserMenuLinks;