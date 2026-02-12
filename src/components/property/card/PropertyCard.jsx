'use client';
import Image from 'next/image';
import { Star, MapPin, Calendar, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import FavoriteButton from './FavoriteButton';
import { useState } from 'react';

/**
 * PropertyCard - المكون الموحد لعرض العقارات في الموقع
 * @param {Object} item - بيانات العقار
 * @param {string} variant - 'grid' للشكل العمودي (الرئيسية/البحث) أو 'row' للشكل العرضي (الحجوزات)
 */
const PropertyCard = ({ item, variant = 'grid' }) => {
  const [isImgLoading, setIsImgLoading] = useState(true);
  const isRow = variant === 'row';

  return (
    <Link 
      href={`/property/${item.id}`} 
      className={`group relative block bg-white transition-all duration-500 overflow-hidden 
        ${isRow 
          ? 'flex flex-row gap-5 p-4 border-b border-gray-100 hover:bg-gray-50/50' 
          : 'flex flex-col gap-2'
        }`}
    >
      {/* 1. Image Section */}
      <div className={`relative overflow-hidden bg-gray-100 shrink-0 shadow-sm
        ${isRow ? 'w-48 h-32 rounded-2xl' : 'aspect-[4/5] w-full rounded-2xl'}`}
      >
        
        <Image
          src={item?.images?.[0] || "/placeholder-house.jpg"}
          alt={item?.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes={isRow ? "180px" : "(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 20vw"}
          onLoad={() => setIsImgLoading(false)}
          // className={`object-cover transition duration-700 ease-in-out group-hover:scale-105
          //   ${isImgLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'}`}
          // sizes={isRow ? "200px" : "(max-width: 768px) 100vw, 25vw"}
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
          
          <div className={!isRow ? "w-full flex justify-between items-center mt-1 border-t border-gray-50 pt-2" : ""}>
             {!isRow && <span className="text-[10px] text-gray-400 font-medium">Free Cancellation</span>}
             <div className={isRow ? "flex items-center gap-2 text-[11px] font-bold text-gray-400 group-hover:text-[#FF385C] transition-colors" : ""}>
               {isRow && "Manage"} <ChevronRight size={14} className={`${!isRow ? 'text-gray-300 group-hover:text-[#FF385C] group-hover:translate-x-1 transition-all' : ''}`} />
             </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;