
import Image from "next/image";
import { ChevronRight } from 'lucide-react';

const CityItems = ({ citiesList, onSelect, isMobile }) => {

return citiesList.map(city => (

        <li 
        key={city.id} 
        tabIndex={0} 
        className={`flex gap-4 items-center cursor-pointer transition-all duration-200 rounded-2xl hover:bg-gray-50 group active:scale-[0.97] outline-none 
                   ${isMobile ? "p-4 border-b border-gray-50" : "p-3"} `}
        role="button"
        onClick={() => onSelect(city.name)}
        onKeyDown={(e) => e.key === 'Enter' && onSelect(city.name)} 
        >
        <div className="w-[64px] h-[64px] relative overflow-hidden flex-shrink-0 rounded-2xl border border-gray-100 shadow-sm bg-gray-100">
            <Image 
            src={city.image_url} 
            alt={city.name} 
            fill 
            sizes="64px"
            className='object-cover group-hover:scale-110 transition-transform duration-700 ease-out'
            />
        </div>

        <div className="flex flex-col flex-grow min-w-0 justify-center">
            <div className="flex items-center justify-between gap-2">
            <h3 className="text-[15px] font-semibold text-gray-900 truncate uppercase tracking-tight">
                {city.name}
            </h3>
            <ChevronRight size={16} className="text-gray-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0" />
            </div>
            
            <p className="text-[13px] text-gray-500 line-clamp-1 mt-0.5 font-normal leading-snug">
            {city.desc || "Experience the local culture"}
            </p>
        </div>
        </li>
    ));




};

export default CityItems;