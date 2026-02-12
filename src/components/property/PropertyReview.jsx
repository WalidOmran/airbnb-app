import { StarIcon, UserGroupIcon } from "@heroicons/react/24/solid";

const PropertyReview = ({ property }) => {
  return (
    <div className="flex items-center gap-6 mb-4 text-gray-700">
      <div className="flex items-center">
        <UserGroupIcon className="h-5 w-5 mr-1.5 text-gray-500" />
        <span className="text-sm md:text-base font-medium">
          {property?.max_guests} Guests
        </span>
      </div>     
      <div className="flex items-center border-l border-gray-200 pl-6">
        <span className="font-bold text-sm md:text-base">
          {property?.review?.rating || "New"}
        </span>
        <StarIcon className="h-4 w-4 text-yellow-400 ml-1" />
        {property?.review?.count && (
           <span className="text-gray-400 text-xs ml-1 underline cursor-pointer">
             ({property.review.count} reviews)
           </span>
        )}
      </div>
    </div>
  );
};

export default PropertyReview;