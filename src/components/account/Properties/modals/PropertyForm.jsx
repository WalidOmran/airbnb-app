"use client";
import Amenities from "./FormSections/Amenities";
import BasicInformation from "./FormSections/BasicInformation";
import LocationPriceSection from "./FormSections/LocationPriceSection";
import AddressSection from "./FormSections/AddressSection";
import SaveButton from "./FormSections/SaveButton";
import { useProperties } from "@/context/PropertyContext";
import { usePropertyFormContext } from "@/context/usePropertyFormContext";
import ImageUploadSection from "./FormSections/ImageUploadSection";


const PropertyForm = ({ onSuccess}) => {
  const {isLoading }= useProperties();
  const { handleSubmit ,isUploading } = usePropertyFormContext();
  
  return (
   
      <form onSubmit={(e)=> handleSubmit(e,onSuccess)} className="space-y-6 py-4 text-left max-h-[70vh] overflow-y-auto px-2 pb-8 w-full">
        
        <BasicInformation />
        <LocationPriceSection />
        <AddressSection  />
        <Amenities />
        <ImageUploadSection />
        <SaveButton loading={isLoading || isUploading}  />
      </form>
   
    
  );
};

export default PropertyForm;