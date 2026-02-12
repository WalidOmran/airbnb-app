import { usePropertyFormContext } from "@/context/usePropertyFormContext"
import { mapService } from "@/services/mapService";

const useMapLogic = () => {
    const {formData , setFormData } = usePropertyFormContext();

    const ReverseGeocoding = async (lng , lat)=> {
        setFormData((prev) => ({
                    ...prev,
                    address: "Fetching address..."
                }))
        try {
            const data = await mapService.getByLocation(lng , lat);
            if (data && data.display_name) {

                setFormData((prev) => ({
                    ...prev,
                    address: data.display_name
                }))
            }
        } catch (error) {
            console.error("Geocoding Error:", error);
            setFormData(prev => ({ ...prev, address: "Failed to get address, please type it manually" }));
        }

    }

    const updateLocation = async (lng , lat)=> {
       
        setFormData((prev) => ({
                    ...prev,
                    location: { latitude: lat, longitude: lng }
                }));
        await ReverseGeocoding(lng , lat);

    }
  return {
    location: formData.location,
    updateLocation
}
}

export default useMapLogic
