"use client";
import { useRouter } from "next/navigation";
import { PlaneTakeoff } from "lucide-react"; 

const NotFoundBookings = () => {
  const router = useRouter(); 

  return (
    <div className="flex flex-col items-center justify-center text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200 px-4">
      
      <div className="bg-white p-4 rounded-full shadow-sm mb-4">
        <PlaneTakeoff size={40} className="text-gray-300" />
      </div>

      <h3 className="text-xl font-bold text-gray-800 mb-2">No adventures planned yet!</h3>
      <p className="text-gray-500 max-w-xs mb-8 text-sm">
        Time to dust off your bags and start planning your next getaway.
      </p>

      <button 
        onClick={() => router.push('/')}
        className="bg-red-500 text-white px-8 py-3 rounded-xl font-bold hover:bg-red-600 hover:shadow-lg active:scale-95 transition-all duration-200"
      >
        Explore Destinations
      </button>
    </div>
  )
}

export default NotFoundBookings;


// "use client";
// import { useRouter } from "next/navigation";
// import { PlaneTakeoff, Ticket } from "lucide-react"; 

// const NotFoundBookings = () => {
//   const router = useRouter(); 

//   return (
//     <div className="flex flex-col items-center justify-center text-center py-16 bg-white rounded-[2rem] border border-gray-100 shadow-sm px-4 animate-in fade-in zoom-in duration-500">
      
//       {/* Container الأيقونة - خليته يشبه الـ Ticket أو الـ Passport */}
//       <div className="relative mb-6">
//         <div className="bg-gray-50 p-6 rounded-full relative z-10">
//           <PlaneTakeoff size={48} strokeWidth={1.5} className="text-gray-400" />
//         </div>
//         {/* لمسة جمالية: دائرة خلفية خفيفة */}
//         <div className="absolute inset-0 bg-red-50 rounded-full blur-2xl opacity-50 scale-150" />
//       </div>

//       <h3 className="text-2xl font-black text-gray-900 mb-3">
//         No adventures planned yet!
//       </h3>
      
//       <p className="text-gray-500 max-w-[300px] mb-10 text-[15px] leading-relaxed">
//         Your next journey is just a click away. Dust off your bags and start planning your next getaway.
//       </p>

//       {/* الزرار بنفس ستايل البراند الجديد */}
//       <button 
//         onClick={() => router.push('/')}
//         className="group relative flex items-center gap-3 bg-gray-900 text-white px-10 py-4 rounded-2xl font-bold hover:bg-black hover:shadow-2xl active:scale-95 transition-all duration-300"
//       >
//         <span>Explore Destinations</span>
//         <Ticket size={18} className="group-hover:rotate-12 transition-transform" />
//       </button>

//       {/* رابط فرعي (اختياري) لو عايز يشوف المساعده */}
//       <button className="mt-6 text-sm font-semibold text-gray-400 hover:text-gray-600 transition-colors">
//         Need help planning?
//       </button>
//     </div>
//   )
// }

// export default NotFoundBookings;