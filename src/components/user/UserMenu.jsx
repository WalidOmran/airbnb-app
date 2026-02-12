// // "use client";

// // import { signOut, useSession } from "next-auth/react";
// // import logger from "@/utils/logger";
// // import Link from "next/link";
// // import { useState } from "react";
// // import UserMenuOptions from "./user/UserMenuOptions";





// // const UserMenu = () => {
// //     const { data: session, status  } = useSession();
// //     const [open, setOpen] = useState(false);

// //     const toggleOpen = () => {
// //         setOpen((open) => !open);
// //     }

// //     // logger.log("UserMenu session:", session);
// //     // {session?.user ? <LoggedInLinks /> : <LoggedOutLinks />}


// //   return (
// //     <div className="relative">

// //         <button
// //          onClick={toggleOpen}
// //         className="flex items-center gap-2 px-3 py-1 rounded-full border hover:shadow-sm cursor-pointer"
// //         aria-haspopup="menu"
// //         aria-expanded={open}>
// //              <span className="hidden md:inline text-sm">
// //             {status === "loading"
// //                 ? "Loading..."
// //                 : session
// //                 ? session.user?.name?.split(" ")[0] || "Account"
// //                 : "Account"}
                
// //             </span>
// //             <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm">
// //                                 {
// //                                     session?.user?.image ? (
// //                                         <img
// //                                             src={session.user.image}
// //                                             alt="User Avatar"
// //                                             className="w-8 h-8 rounded-full object-cover"
// //                                         />
// //                                     ) : (
// //                                         session?.user?.name?.[0]?.toUpperCase() || "U"
// //                                     )
// //                                 }
// //             </div>

// //         </button>

// //         {open && (
// //             <div className="absolute right-0 mt-2 w-48 bg-white border rounded-xl shadow-lg text-sm z-50"
// //           role="menu">
// //             {
// //                 !session && (
// //                     <Link
// //                     href="/auth/signin"
// //                     className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
// //                     role="menuitem"
// //                 >
// //                     Sign In 
// //                 </Link>
// //                 )
// //             }

            

// //             { session && <UserMenuOptions open={open} setOpen={setOpen} /> }
// //           </div>
// //         )}
      
// //     </div>
// //   )
// // }

// // export default UserMenu


// // "use client";
// // import { useState } from "react";
// // import UserMenuOptions from "./user/UserMenuOptions";
// // import UserAvatarCapsule from "./user/UserAvatarCapsule";

// // const UserMenu = () => {
// //   const [open, setOpen] = useState(false);

// //   const toggleOpen = () => setOpen((prev) => !prev);

// //   return (
   
// //     <div className="relative flex items-center gap-4"> 
// //         <UserAvatarCapsule onClick={toggleOpen} />
// //             {open && (
// //                 <div className="absolute top-full right-0 mt-3 w-64 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 py-2 z-50 animate-in fade-in zoom-in duration-200">
// //                 <UserMenuOptions setOpen={setOpen} />
// //                 </div>
// //             )}
// //     </div>
// //   );
// // };

// // export default UserMenu;



// "use client";

// import { useSession } from "next-auth/react";
// import { useState, useRef, useEffect } from "react";
// import UserMenuOptions from "./user/UserMenuOptions";
// import UserAvatarCapsule from "./user/UserAvatarCapsule";
// import GuestMenuOptions from "./user/GuestMenuOptions";

// const UserMenu = () => {
//   const [open, setOpen] = useState(false);
//   const menuRef = useRef(null);
//   const toggleOpen = () => setOpen((prev) => !prev);
//  const { data: session } = useSession();
//   useEffect(() => {
//     const closeMenu = (e) => {
//       if (menuRef.current && !menuRef.current.contains(e.target)) {
//         setOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", closeMenu);
//     return () => document.removeEventListener("mousedown", closeMenu);
//   }, []);

//   return (
//     <div className="relative flex items-center" ref={menuRef}> 
      
//       <UserAvatarCapsule onClick={toggleOpen} />
//       <div 
//         className={`
//           absolute right-0 top-full mt-2 z-50 
//           w-64 bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.12)] 
//           border border-gray-100 overflow-hidden
//           transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]
//           origin-top-right
//           ${open 
//             ? "opacity-100 scale-100 translate-y-0 visible" 
//             : "opacity-0 scale-95 -translate-y-4 invisible"}
//           max-sm:fixed max-sm:right-4 max-sm:left-4 max-sm:w-auto max-sm:top-[75px]
//         `}
//         >
//         {
//             session?.user ? 
//             <UserMenuOptions setOpen={setOpen} />
//             : 
//             <GuestMenuOptions setOpen={setOpen} />
//         }
        
//       </div>
//     </div>
//   );
// };

// export default UserMenu;




"use client";

import { useSession } from "next-auth/react";
import { useState, useRef, useEffect } from "react";
import UserMenuOptions from "./UserMenuOptions";
import UserAvatarCapsule from "./UserAvatarCapsule";
import GuestMenuOptions from "./GuestMenuOptions";
import MenuSkeleton from "./MenuSkeleton";

const UserMenu = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const { data: session, status } = useSession(); // ضفنا status هنا

  const toggleOpen = () => setOpen((prev) => !prev);

  useEffect(() => {
    const closeMenu = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", closeMenu);
    return () => document.removeEventListener("mousedown", closeMenu);
  }, []);

  return (
    <div className="relative flex items-center" ref={menuRef}> 
      <UserAvatarCapsule onClick={toggleOpen} />
      
      <div 
        className={`
          absolute right-0 top-full mt-2 z-50 
          w-64 bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.12)] 
          border border-gray-100 overflow-hidden
          transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]
          origin-top-right
          ${open 
            ? "opacity-100 scale-100 translate-y-0 visible" 
            : "opacity-0 scale-95 -translate-y-4 invisible"}
          max-sm:fixed max-sm:right-4 max-sm:left-4 max-sm:w-auto max-sm:top-[75px]
        `}
      >
        {status === "loading" ? (
          <MenuSkeleton />
        ) : session ? (
          <UserMenuOptions setOpen={setOpen} />
        ) : (
          <GuestMenuOptions setOpen={setOpen} />
        )}
      </div>
    </div>
  );
};

export default UserMenu;