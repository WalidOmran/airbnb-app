
// 'use client';
// import Image from 'next/image';
// import { Star, MapPin, Calendar, CreditCard } from 'lucide-react';
// import Link from 'next/link';
// import FavoriteButton from '../FavoriteButton';

// // variant يمكن أن يكون: 'grid' (للرئيسية والبحث) أو 'row' (للحجوزات والمفضلات)
// const ListingCard = ({ item, variant = 'grid' }) => {
//   const isRow = variant === 'row';

//   return (
//     <Link 
//       href={`/property/${item.id}`} 
//       className={`group relative block bg-white overflow-hidden transition-all duration-500 
//         ${isRow 
//           ? 'flex flex-row gap-6 p-4 border-b border-gray-100 hover:bg-gray-50' 
//           : 'flex flex-col rounded-3xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-transparent hover:border-gray-100'
//         }`}
//     >
//       {/* 1. Image Section */}
//       <div className={`relative overflow-hidden bg-gray-100 shrink-0 
//         ${isRow ? 'w-48 h-32 rounded-2xl' : 'aspect-[4/5] w-full rounded-none'}`}
//       >

        
//         <Image
//           src={item.images?.[0] || "/placeholder-house.jpg"}
//           alt={item.title}
//           fill
//           className="object-cover transition-transform duration-700 group-hover:scale-110"
//           sizes={isRow ? "200px" : "(max-width: 768px) 100vw, 25vw"}
//         />
//         {!isRow && (
//           <div className="absolute top-4 right-4 z-10" onClick={(e) => e.preventDefault()}>
//             <FavoriteButton item={item} />
//           </div>
//         )}
//       </div>

//       {/* 2. Content Section */}
//       <div className={`flex flex-col flex-grow ${isRow ? 'justify-between py-1' : 'p-5 gap-2.5'}`}>
//         <div className="flex justify-between items-start">
//           <div className="flex flex-col gap-1">
//             <h4 className={`font-bold text-gray-800 leading-tight group-hover:text-[#FF385C] transition-colors
//               ${isRow ? 'text-base' : 'text-lg'}`}>
//               {item.title}
//             </h4>
//             {isRow ? (
//               <div className="flex items-center gap-4 text-xs text-gray-500 mt-1">
//                 <span className="flex items-center gap-1"><Calendar size={12}/> Jan 12 - Jan 15</span>
//                 <span className="flex items-center gap-1"><CreditCard size={12}/> Confirmed</span>
//               </div>
//             ) : (
//               <div className="flex items-center gap-1 text-gray-400">
//                 <MapPin size={12} />
//                 <span className="text-xs font-medium">Premium Location</span>
//               </div>
//             )}
//           </div>
          
//           <div className={`flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-lg ${isRow ? 'hidden md:flex' : ''}`}>
//             <Star size={14} className="fill-yellow-400 text-yellow-400" />
//             <span className="text-xs font-bold text-gray-700">{item.review?.rating || "5.0"}</span>
//           </div>
//         </div>

//         {/* {!isRow && (
//           <p className="text-[13px] text-gray-500 line-clamp-2 leading-relaxed font-light">
//             {item.description}
//           </p>
//         )} */}

//         {/* 3. Footer / Pricing */}
//         <div className={`flex items-center justify-between ${!isRow ? 'pt-3 mt-1 border-t border-gray-50' : ''}`}>
//           <div className="text-gray-900 font-bold">
//             <span className={isRow ? 'text-base' : 'text-lg'}>${isRow ? item.total_price || '450' : item.price_per_night}</span>
//             <span className="font-normal text-gray-500 text-[10px] uppercase ml-1">
//               {isRow ? 'Total Paid' : '/ Night'}
//             </span>
//           </div>
          
//           {isRow ? (
//             <button className="text-xs font-bold text-gray-400 border px-3 py-1.5 rounded-lg hover:bg-gray-100 transition-colors">
//               Manage Booking
//             </button>
//           ) : (
//             <span className="text-[11px] font-bold text-[#FF385C] uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0">
//               Details →
//             </span>
//           )}
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default ListingCard;










'use client';
import Image from 'next/image';
import { Star, MapPin, Calendar, CreditCard, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import FavoriteButton from '../property/card/FavoriteButton';

const ListingCard = ({ item, variant = 'grid' }) => {
  const isRow = variant === 'row';

  return (
    <Link 
      href={`/property/${item.id}`} 
      className={`group relative block bg-white transition-all duration-500 
        ${isRow 
          ? 'flex flex-row gap-5 p-4 border-b border-gray-100 hover:bg-gray-50/50' 
          : 'flex flex-col gap-2'
        }`}
    >
      {/* 1. Image Section */}
      <div className={`relative overflow-hidden bg-gray-100 shrink-0 shadow-sm
        ${isRow ? 'w-44 h-28 rounded-2xl' : 'aspect-[3/4] w-full rounded-2xl'}`}
      >
        <Image
          src={item.images?.[0] || "/placeholder-house.jpg"}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes={isRow ? "180px" : "(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 20vw"}
        />
        
        {!isRow && (
          <div className="absolute top-3 right-3 z-10" onClick={(e) => e.preventDefault()}>
            <FavoriteButton item={item} />
          </div>
        )}

       
        {!isRow && (
          <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-2 py-1 rounded-lg shadow-sm">
             <span className="text-xs font-black text-gray-900">${item.price_per_night}</span>
             <span className="text-[9px] text-gray-500 uppercase ml-0.5">/nt</span>
          </div>
        )}
      </div>

      {/* 2. Content Section */}
      <div className={`flex flex-col flex-grow ${isRow ? 'justify-between py-1' : 'px-1 py-1'}`}>
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-0.5 max-w-[85%]">
            <h4 className={`font-bold text-gray-900 truncate tracking-tight group-hover:text-[#FF385C] transition-colors
              ${isRow ? 'text-base' : 'text-[15px]'}`}>
              {item.title}
            </h4>
            
            <div className="flex items-center gap-1 text-gray-400">
              <MapPin size={10} />
              <span className="text-[10px] font-medium uppercase tracking-wide">Premium Stay</span>
            </div>

            {isRow && (
              <div className="flex items-center gap-3 text-[10px] text-gray-400 mt-2">
                <span className="flex items-center gap-1"><Calendar size={10}/> Jan 12 - 15</span>
                <span className="flex items-center gap-1 font-bold text-green-600 uppercase tracking-tighter italic">● Confirmed</span>
              </div>
            )}
          </div>
          
          <div className={`flex items-center gap-1 shrink-0 ${isRow ? 'hidden md:flex' : ''}`}>
            <Star size={12} className="fill-yellow-400 text-yellow-400" />
            <span className="text-[11px] font-bold text-gray-700">{item.review?.rating || "5.0"}</span>
          </div>
        </div>

        {/* 3. Footer Section */}
        <div className={`flex items-center justify-between ${!isRow ? 'mt-1' : ''}`}>
          {isRow ? (
             <div className="text-gray-900 font-bold text-base">
                ${item.total_price || '450'} <span className="text-[10px] text-gray-400 font-normal">Total</span>
             </div>
          ) : null}
          
          {isRow ? (
            <div className="flex items-center gap-2 text-[11px] font-bold text-gray-400 group-hover:text-[#FF385C] transition-colors">
              Manage <ChevronRight size={14} />
            </div>
          ) : (
            <div className="w-full flex justify-between items-center mt-1 border-t border-gray-50 pt-2">
               <span className="text-[10px] text-gray-400 font-medium">Free Cancellation</span>
               <ChevronRight size={14} className="text-gray-300 group-hover:text-[#FF385C] group-hover:translate-x-1 transition-all" />
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ListingCard;