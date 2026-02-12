const PropertyCardSkeleton = ({ variant = 'grid' }) => {
  const isRow = variant === 'row';

  return (
    <div className={`animate-pulse bg-white ${isRow ? 'flex flex-row gap-5 p-4 border-b' : 'flex flex-col gap-2'}`}>
      
      {/* 1. Image Skeleton */}
      <div className={`bg-gray-200 shrink-0 ${isRow ? 'w-44 h-28 rounded-2xl' : 'aspect-[3/4] w-full rounded-2xl'}`} />

      {/* 2. Content Skeleton */}
      <div className={`flex flex-col flex-grow ${isRow ? 'justify-between py-1' : 'px-1 py-1'}`}>
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-2 w-full">
            {/* Title Line */}
            <div className="h-4 bg-gray-200 rounded-md w-3/4" />
            {/* Location/Sub-title Line */}
            <div className="h-3 bg-gray-100 rounded-md w-1/4" />
          </div>
          {/* Rating Skeleton */}
          {!isRow && <div className="h-5 bg-gray-200 rounded-lg w-10 shrink-0" />}
        </div>

        {/* 3. Footer Skeleton */}
        <div className={`flex items-center justify-between ${!isRow ? 'mt-3 border-t border-gray-50 pt-3' : ''}`}>
          {/* Price Line */}
          <div className="h-5 bg-gray-200 rounded-md w-20" />
          {/* Action/Icon Skeleton */}
          <div className="h-4 bg-gray-100 rounded-md w-12" />
        </div>
      </div>
    </div>
  );
};

export default PropertyCardSkeleton;