
"use client";

import { signIn } from "next-auth/react";
import { UserPlus, LogIn, HelpCircle } from 'lucide-react';

const GuestMenuOptions = ({ setOpen }) => {
 
 
 return (
    <div className="flex flex-col w-full py-2 bg-white">
      <button
        onClick={() => { setOpen(false); signIn(); }}
        className="w-full text-left px-5 py-3 text-sm font-bold text-gray-900 hover:bg-gray-50 transition-colors flex items-center gap-3"
      >
        <LogIn size={16} className="text-gray-400" />
        Log in
      </button>

      <button
        onClick={() => { setOpen(false); signIn(); }} 
        className="w-full text-left px-5 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors flex items-center gap-3"
      >
        <UserPlus size={16} className="text-gray-400" />
        Sign up
      </button>

      
      <div className="h-[1px] bg-gray-100 my-2" />

    
      <button className="w-full text-left px-5 py-3 text-sm text-gray-600 hover:bg-gray-50 transition-colors flex items-center gap-3 font-medium">
        <HelpCircle size={16} className="text-gray-400" />
        Help Center
      </button>
    </div>
  );
};

export default GuestMenuOptions;