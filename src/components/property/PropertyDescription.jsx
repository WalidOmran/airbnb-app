import PropertyReview from "./PropertyReview"


const PropertyDescription = ({property}) => {
  return (
        <div className="mb-1">
            <p className="mb-2 md:text-center md:text-left ">{ property.description }</p>
            <PropertyReview property={property} />         
        </div>
  )
}

export default PropertyDescription
