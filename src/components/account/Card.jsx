import Image from 'next/image';
import { Star, MapPin } from 'lucide-react';
import { useState } from 'react';

const Card = ({ data }) => {
  const [isLoading, setIsLoading] = useState(true);
  if (!data) return <div className="p-4 text-gray-400">Property info unavailable</div>;

  return (
    <div className="group">
      <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl">
        
        {isLoading && (
          <div className="absolute inset-0 animate-pulse bg-gray-200" />
        )}
        <Image
          fill
          src={data.images?.[0] || '/placeholder.jpg'}
          alt={data.title}
          className={`
            object-cover transition duration-700 ease-in-out group-hover:scale-105
            ${isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'}
          `}
          onLoadingComplete={() => setIsLoading(false)} 
          // onLoad={() => setIsLoading(false)} 
        />

        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg shadow-sm">
           <div className="flex items-center gap-1">
              <Star size={12} className="fill-yellow-500 text-yellow-500" />
              <span className="text-xs font-bold">{data.review?.rating || 'New'}</span>
           </div>
        </div>
      </div>

     

      <div className="p-4 flex flex-col flex-1">
          <h3 className="font-bold text-gray-800 truncate mb-1 text-sm md:text-base">
            {data.title}
          </h3>
          
          <div className="flex items-center gap-1 text-gray-400 text-[11px] mb-3">
            <MapPin size={12} className="shrink-0 text-gray-400" />
            <span className="truncate">{data.address}</span>
          </div>
          
          <div className="mt-auto flex items-center justify-between">
            <div className="flex items-baseline gap-1">
              <span className="text-base font-black text-gray-900">
                ${Number(data.price_per_night).toLocaleString()}
              </span>
              <span className="text-gray-500 text-[10px] font-medium uppercase tracking-tighter">
                / night
              </span>
            </div>
            
         
            <span className="text-[10px] text-gray-400 bg-gray-50 px-2 py-0.5 rounded-md border border-gray-100">
              Entire Place
            </span>
          </div>
        </div>
    </div>
  );
};

export default Card;







