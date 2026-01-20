const PropertyAmenities = ({property}) => {
  return (
    <div className="my-2">
        <h3 className=" text-xl "> What this accommodation offers </h3>
        <div className="w-1/3 grid grid-cols-2 my-1">
            { 
            property.amenities.map((item) => 
            <p className="mb-2" key={item}>{item}  </p>) 
            } 
        </div>
    </div>
  )
}

export default PropertyAmenities
