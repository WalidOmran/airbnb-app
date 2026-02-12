"use client";
import { useRouter } from "next/navigation";
import { HeartOff } from "lucide-react"; 

const NotFoundFavorites = () => {
  const router = useRouter(); 

  return (
    <div className="flex flex-col items-center justify-center text-center py-16 bg-white rounded-3xl border border-gray-100 shadow-sm px-4 animate-in fade-in duration-700">
      
     
      <div className="bg-gray-50 p-5 rounded-full mb-5 text-gray-300">
        <HeartOff size={44} strokeWidth={1.5} />
      </div>

      <h3 className="text-2xl font-black text-gray-900 mb-2">
        Your wishlist is waiting
      </h3>
      
      <p className="text-gray-500 max-w-[280px] mb-8 text-sm leading-relaxed">
        Save your favorite stays so you can easily find them later and book your dream trip.
      </p>

      <button 
        onClick={() => router.push('/')}
        className="bg-[#FF385C] text-white px-10 py-3.5 rounded-2xl font-bold hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-md"
      >
        Find your next stay
      </button>
    </div>
  )
}

export default NotFoundFavorites;