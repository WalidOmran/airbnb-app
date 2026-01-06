"use client";

import { signOut, useSession } from "next-auth/react";
import UserMenuLinks from "./UserMenuLinks";    

const UserMenuOptions = ({open, setOpen}) => {
    const { data: session } = useSession();
    return (
        <>
            <p className="px-4 pt-2 pb-1 text-xs text-gray-500">
                Signed in as
            </p>
            <p className="px-4 pb-2 text-xs break-all">
                {session.user?.email}
            </p>
            <hr className="my-1" />
            <UserMenuLinks  />
            <hr className="my-1" />
            <button
                onClick={() => {
                setOpen(false);
                signOut();
                }}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600 cursor-pointer"
                role="menuitem"
            >
                Log out
            </button>
        </>
    )
}
export default UserMenuOptions;