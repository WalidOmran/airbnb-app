import { usePropertyFormContext } from "@/context/usePropertyFormContext"
import { AVAILABLE_AMENITIES } from "@/constants/amenities";



const AmenitiesItem = ({amenity,isSelected, toggleAmenity}) => {
  return (
          <button
            
            type="button"
            onClick={() => toggleAmenity(amenity.id)}
           className={`
                flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all duration-200
                ${isSelected 
                  ? "border-[#FF385C] bg-[#FFF0F3] shadow-md scale-[1.02]" 
                  : "border-gray-100 bg-white hover:border-gray-300 hover:shadow-sm"}
              `}
          >
            <div className={`mb-2 transition-colors duration-200 ${isSelected ? "text-[#FF385C]" : "text-gray-500"}`}>
          {amenity.icon}
        </div>
        
        <span className={`text-[13px] font-semibold text-center ${isSelected ? "text-[#FF385C]" : "text-gray-600"}`}>
          {amenity.label}
        </span>
          </button>
        );
}




const Amenities = () => {
  const { formData, toggleAmenity } = usePropertyFormContext();
 
  return (
  <div className="mt-6">
    <label className="block text-xs font-bold text-gray-500 uppercase mb-6 tracking-wider">
      What this place offers
    </label>
    
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {AVAILABLE_AMENITIES.map((amenity) => {
        const isSelected = formData.amenities.includes(amenity.id);
        
        return (
          <AmenitiesItem 
            key={amenity.id} 
            amenity={amenity} 
            isSelected={isSelected} 
            toggleAmenity={toggleAmenity} 
          />
        );
      })}
    </div>
  </div>
);
 
}

export default Amenities
