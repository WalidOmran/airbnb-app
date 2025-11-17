import { HeartIcon as HeartSolid , StarIcon , UserGroupIcon} from "@heroicons/react/24/solid";

const PropertyReview = ({property}) => {
  return (
       <div className=" flex gap-8 mb-2">
            <p className="flex items-center"> <UserGroupIcon className="h-6 w-6  mr-1" /> { property.max_guests } Guests </p>
            <p className='flex items-center text-sm'>
                <span className=''>{property.review.rating}</span> 
                <span className='flex items-center ml-1'>
                    <StarIcon className="h-4 w-4 text-yellow-400" />
                </span>
            </p> 
        </div>   
  )
}

export default PropertyReview
