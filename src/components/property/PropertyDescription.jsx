import PropertyReview from "./PropertyReview"

const PropertyDescription = ({property}) => {
 
  
  return (
    <div className="mb-6 border-b border-gray-100 pb-6"> 
        <h3 className="text-xl font-semibold mb-3">About this place</h3>
        
        <p className="text-gray-600 leading-relaxed text-justify md:text-left line-clamp-4 md:line-clamp-none">
            {property.description}
        </p>
     
        <div className="mt-4">
            <PropertyReview property={property} /> 
        </div>
    </div>
  )
}

export default PropertyDescription