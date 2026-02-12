import { AVAILABLE_AMENITIES } from "@/constants/amenities";

const PropertyAmenities = ({ property }) => {
 
  const propertyAmenities = AVAILABLE_AMENITIES.filter((a) =>
    property?.amenities?.includes(a.id)
  );

  return (
    <div className="py-8 border-b border-gray-100">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">What this place offers</h3>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {propertyAmenities.map((amenity) => (
          <div 
            key={amenity.id}
            className="flex flex-col items-center justify-center p-4 rounded-2xl border border-gray-50 bg-gray-50/50 text-gray-700 transition-all hover:bg-white hover:shadow-sm"
          >
            <div className="mb-2 text-gray-500">
               
               {amenity.icon}
            </div>
            <span className="text-xs font-medium text-center">{amenity.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyAmenities;

