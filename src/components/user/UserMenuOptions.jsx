// "use client";

// import { signOut, useSession } from "next-auth/react";
// import UserMenuLinks from "./UserMenuLinks";
// import { LogOut } from 'lucide-react'; 

// const UserMenuOptions = ({ setOpen }) => {
//   const { data: session } = useSession();

//   return (
//     <div className="flex flex-col py-2 w-full">
      
//       {session && (
//         <div className="px-4 py-3 border-b border-gray-100 mb-1">
//           <p className="text-sm font-bold text-gray-800 truncate">
//              {session.user?.name || "User Account"}
//           </p>
//           <p className="text-xs text-gray-400 truncate mt-0.5">
//             {session.user?.email}
//           </p>
//         </div>
//       )}

     
//       <div className="flex flex-col">
//         <UserMenuLinks onClick={() => setOpen(false)} />
//       </div>

   
//       <div className="mt-2 pt-2 border-t border-gray-100">
//         <button
//           onClick={() => {
//             setOpen(false);
//             signOut();
//           }}
//           className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition-colors font-medium"
//         >
//           <LogOut size={16} strokeWidth={2} />
//           Log out
//         </button>
//       </div>
//     </div>
//   );
// };

// export default UserMenuOptions;




"use client";

import { signOut, useSession } from "next-auth/react";
import UserMenuLinks from "./UserMenuLinks";
import { LogOut } from 'lucide-react'; 

const UserMenuOptions = ({ setOpen }) => {
  const { data: session } = useSession();
 
  return (
    <div className="flex flex-col w-full bg-white">
      
      
      {session && (
        <div className="px-5 py-4 border-b border-gray-50 bg-gray-50/50">
          <p className="text-sm font-semibold text-gray-900 truncate">
             {session.user?.name || "Welcome!"}
          </p>
          <p className="text-xs text-gray-500 truncate mt-0.5 font-medium">
            {session.user?.email}
          </p>
        </div>
      )}

    
      <div className="py-1">
        <UserMenuLinks onClick={() => setOpen(false)} />
      </div>

      
      <div className="border-t border-gray-100 mt-1 pb-1">
        <button
          onClick={() => {
            setOpen(false);
            signOut();
          }}
          className="w-full flex items-center gap-3 px-5 py-3 text-sm text-red-500 hover:bg-red-50 transition-all duration-200 font-semibold"
        >
          <LogOut size={16} strokeWidth={2.5} />
          <span>Log out</span>
        </button>
      </div>
    </div>
  );
};

export default UserMenuOptions;