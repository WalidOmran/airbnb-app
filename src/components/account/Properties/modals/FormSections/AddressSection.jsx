import FormItem from "@/components/form/FormItem";
import { usePropertyFormContext } from "@/context/usePropertyFormContext";
const AddressSection = () => {
  const {formData, handleChange,errors} = usePropertyFormContext();
  return (
     <FormItem 
          id="address"
          type="text"
          text="Full Address"
          value={formData.address}
          setValue={handleChange}
          placeholder="Street name, Building number..."
          inputStyle="w-full mt-1 p-3 border rounded-xl bg-gray-50 focus:ring-2 focus:ring-gray-800 outline-none"
          labelStyle="block text-xs font-bold text-gray-500 uppercase"
          error={errors.address}
        />
  )
}

export default AddressSection
