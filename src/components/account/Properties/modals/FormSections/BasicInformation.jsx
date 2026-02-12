import FormItem from '@/components/form/FormItem'
import { usePropertyFormContext } from '@/context/usePropertyFormContext'


const BasicInformation = () => {
  const { formData, handleChange, errors } = usePropertyFormContext();
  return (
    <div className="space-y-4">
        <h3 className="font-bold text-gray-700 border-b pb-2">Basic Information</h3>
        
        <FormItem
          id="title"
          type="text"
          text="Property Title"
          value={formData.title}
          setValue={handleChange}
          placeholder="e.g. Cozy Beachfront Villa"  
          inputStyle="w-full mt-1 p-3 border rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-gray-800 outline-none transition-all"
          labelStyle="block text-xs font-bold text-gray-500 uppercase" 
          error={errors.title}
        />
       
        <FormItem 
          id="description"
          type="textarea"
          text="Description"
          value={formData.description}
          setValue={handleChange}
          placeholder="Tell guests what makes your place special..."
          inputStyle="w-full mt-1 p-3 border rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-gray-800 outline-none transition-all"
          labelStyle="block text-xs font-bold text-gray-500 uppercase"
          error={errors.description}
        />
      </div>
  )
}

export default BasicInformation
