"use client";

import { signOut, useSession } from "next-auth/react";
import logger from "@/utils/logger";
import Link from "next/link";
import { useState } from "react";
import UserMenuOptions from "./user/UserMenuOptions";





const UserMenu = () => {
    const { data: session, status  } = useSession();
    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen((open) => !open);
    }

    logger.log("UserMenu session:", session);


  return (
    <div className="relative">

        <button
         onClick={toggleOpen}
        className="flex items-center gap-2 px-3 py-1 rounded-full border hover:shadow-sm cursor-pointer"
        aria-haspopup="menu"
        aria-expanded={open}>
             <span className="hidden md:inline text-sm">
            {status === "loading"
                ? "Loading..."
                : session
                ? session.user?.name?.split(" ")[0] || "Account"
                : "Account"}
                
            </span>
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm">
                                {
                                    session?.user?.image ? (
                                        <img
                                            src={session.user.image}
                                            alt="User Avatar"
                                            className="w-8 h-8 rounded-full object-cover"
                                        />
                                    ) : (
                                        session?.user?.name?.[0]?.toUpperCase() || "U"
                                    )
                                }
            </div>

        </button>

        {open && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-xl shadow-lg text-sm z-50"
          role="menu">
            {
                !session && (
                    <Link
                    href="/auth/signin"
                    className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    role="menuitem"
                >
                    Sign In 
                </Link>
                )
            }

            

            { session && <UserMenuOptions open={open} setOpen={setOpen} /> }
          </div>
        )}
      
    </div>
  )
}

export default UserMenu
