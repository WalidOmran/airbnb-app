"use client";

import { Menu, UserCircle2 } from 'lucide-react';
import Image from "next/image";
import { useSession } from "next-auth/react";

const UserAvatarCapsule = ({ onClick }) => {
  const { data: session } = useSession();

  return (
    <button
      onClick={onClick}
      className="flex items-center gap-3 p-1.5 pl-3 border border-gray-200 rounded-full hover:shadow-md transition-all bg-white cursor-pointer active:scale-95 shadow-sm group"
      aria-label="User menu"
      title="Account"
    >
      
      <Menu 
            size={18} 
            strokeWidth={1.5} 
            className="text-gray-500 group-hover:text-black transition-colors" 
            />
     
      <div className="relative h-8 w-8 bg-gray-500 rounded-full overflow-hidden flex-shrink-0 border border-gray-100 shadow-sm">
        {session?.user?.image ? (
          <Image 
            src={session.user.image} 
            alt="profile" 
            fill 
            sizes="32px"
            className="object-cover"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center text-white bg-gradient-to-br from-gray-400 to-gray-600">
             <UserCircle2 size={20} strokeWidth={1.5} />
          </div>
        )}
      </div>
    </button>
  );
};

export default UserAvatarCapsule;