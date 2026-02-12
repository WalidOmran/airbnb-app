import FormItem from "@/components/form/FormItem"
import { useCities } from "@/context/CitiesContext";
import MapPicker from "./MapPicker";
import { usePropertyFormContext } from "@/context/usePropertyFormContext";

const LocationPriceSection = () => {
  const { cities, loadingCities } = useCities();
  const {formData ,errors , handleChange, updateLocationByCity} = usePropertyFormContext();
  return (
    <>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          <FormItem 
            id="price_per_night"
            type="number"
            text="Price / Night"
            value={formData.price_per_night}
            setValue={handleChange}
            inputStyle="w-full mt-1 p-3 border rounded-xl bg-gray-50 focus:ring-2 focus:ring-gray-800 outline-none"
            labelStyle="block text-xs font-bold text-gray-500 uppercase"
            error={errors.price_per_night}
          />
          <FormItem
            id="max_guests"
            type="number"
            text="Max Guests"
            value={formData.max_guests}
            setValue={handleChange} 
            inputStyle="w-full mt-1 p-3 border rounded-xl bg-gray-50 focus:ring-2 focus:ring-gray-800 outline-none"
            labelStyle="block text-xs font-bold text-gray-500 uppercase"
            error={errors.max_guests}
          />
          <FormItem 
            type="select"
            id="city_id"
            text="City ID"
            value={formData.city_id}
            setValue={(e)=> updateLocationByCity(e,cities)}
            selectOptions={cities}
            inputStyle="w-full mt-1 p-3 border rounded-xl bg-gray-50 focus:ring-2 focus:ring-gray-800 outline-none"
            labelStyle="block text-xs font-bold text-gray-500 uppercase"
            error={errors.city_id}
            placeholder={loadingCities ? "Loading cities..." : "Select a city"}
          />

          
        </div>

        <div className="md:col-span-3">
            <p className="text-xs font-bold text-gray-500 uppercase mb-2">Pin your property location</p>
            <MapPicker />
        </div>
    </>
  )
}

export default LocationPriceSection
