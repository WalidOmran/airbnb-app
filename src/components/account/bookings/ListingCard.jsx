import Image from 'next/image';
import { Star, MapPin, Heart } from 'lucide-react';

const ListingCard = ({ data }) => {
  return (
    <div className="group cursor-pointer flex flex-col gap-2">
      {/* منطقة الصورة - مع زرار الـ Favorite */}
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100">
        <Image
          fill
          src={data.images?.[0] || '/placeholder.jpg'}
          alt={data.title}
          className="object-cover group-hover:scale-105 transition duration-500"
        />
        {/* زرار القلب (اختياري) */}
        <button className="absolute top-3 right-3 p-2 hover:scale-110 transition">
          <Heart size={22} className="text-white/70 fill-black/20 hover:fill-red-500 hover:text-red-500" />
        </button>
      </div>

      {/* تفاصيل العقار */}
      <div className="px-1">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-gray-800 text-[15px] truncate max-w-[80%]">
            {data.title}
          </h3>
          <div className="flex items-center gap-1">
            <Star size={14} className="fill-yellow-500 text-yellow-500" />
            <span className="text-sm font-semibold text-gray-700">{data.review?.rating || "New"}</span>
          </div>
        </div>

        <div className="flex items-center gap-1 text-gray-500 text-sm mt-0.5">
          <MapPin size={14} />
          <span className="truncate">{data.address || data.location?.city}</span>
        </div>

        <div className="mt-2 flex items-center gap-1">
          <span className="text-lg font-black text-gray-900">${data.price_per_night}</span>
          <span className="text-gray-500 text-sm font-light">night</span>
        </div>
      </div>
    </div>
  );
};

export default ListingCard