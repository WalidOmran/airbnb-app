"use client"; 
import { uploadToCloudinary } from "@/app/lib/cloudinary";
import { propertyFormSchema } from "@/app/lib/schemas/propertyFormSchema";
import { useProperties } from "@/context/PropertyContext";
import { useCallback, useEffect, useState } from "react";



const initialFormState = {
    title: "",
    description: "",
    price_per_night: "",
    address: "",
    max_guests: 1,
    city_id: "",
    amenities: [],
    images: [], 
    location: { latitude: 30.0444, longitude: 31.2357 }
    // location: { latitude: null, longitude: null }
};



const usePropertyForm = (initialData) => {
    const [formData, setFormData] = useState(initialFormState);
    const [errors,setErrors] = useState({});
    const [isUploading, setIsUploading] = useState(false);

    const {handleAddProperty , handleUpdateProperty  }= useProperties();

    const handleChange = useCallback((e) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));

      setErrors(prev => {
        if(!prev[name]) return prev;
        const newErrors = {...prev};
        delete newErrors[name];
        return newErrors;
      });

    },[]);

    const updateLocationByCity = (e,citiesArray) => {
        const selectedId = e.target.value;
        handleChange(e);
        const city = citiesArray.find((city) => String(city.id) === String(selectedId));


        if(city) {
            setFormData(prev => ({
                ...prev,
                city_id: selectedId,
                location: { 
                    latitude: Number(city.latitude), 
                    longitude: Number(city.longitude) 
                }
            }));  
        }
    }

    const toggleAmenity = useCallback((amenityId) => {
        setFormData(prev => ({
            ...prev,
            amenities: prev.amenities.includes(amenityId)
                ? prev.amenities.filter(id => id !== amenityId)
                : [...prev.amenities, amenityId]
        }));
    }, []);

    
    const formValidate = () => {
        const result = propertyFormSchema.safeParse(formData);
        if(!result.success) {
            const fieldErrors = result.error.flatten().fieldErrors;
            const formattedErrors = {};
            for(const key in fieldErrors) {
                formattedErrors[key] = fieldErrors[key][0];
            }
            setErrors(formattedErrors);
            return false;
        }
        setErrors({});
        return true;
    }
    const resetForm = () => setFormData(initialFormState);

    const uploadAllImages = async () => {
        if( !formData.images || formData.images.length === 0 ) return [];

        const uploadPromises = formData.images.map(imgObj => {
            if(imgObj.file && typeof imgObj.file === 'object') {
                return uploadToCloudinary(imgObj.file);
            }
            
            return  imgObj.preview;
        });

        return await Promise.all(uploadPromises);

    }
    const getFormattedData = async() => {
        const imageUrls = await uploadAllImages();
        const finalImageUrls = imageUrls.filter(url => url !== null);
        
       return {
            ...formData,
            price_per_night: parseFloat(formData.price_per_night) || 0,
            max_guests: parseInt(formData.max_guests),
            city_id: parseInt(formData.city_id),
            images: finalImageUrls 
        }
    
    };


    
const handleSubmit = async (e,onSuccess) => {
    if (e) e.preventDefault();

    console.log("Current Form Data ID:", formData.id);


    
    if (!formValidate()) return;
    
    try {
        setIsUploading(true);
        const data = await getFormattedData();
        let success;

        if(formData.id) {
            success = await handleUpdateProperty(formData.id, data);
        }else{
           success = await handleAddProperty({ propertyData: data });
        }
        
        
        if (success) {
            resetForm();
            if (onSuccess) onSuccess();
        }
    } catch (error) {
        console.error("Submission failed:", error);
    }finally {
        setIsUploading(false);
    }
};


useEffect(()=>{
    if(initialData) {
        setFormData({
            ...initialData,
            images: initialData.images?.map((img) =>  
            typeof img === 'string' ? {preview : img , file: null} : img
        ) || []
        });
    }else {
        setFormData(initialFormState);
    }
},[initialData]);
    
  return {
       
        formData,
        setFormData,
        errors,
        handleChange,
        updateLocationByCity,
        resetForm, 
        toggleAmenity,
        getFormattedData,
        formValidate,
        uploadAllImages,
        isUploading,
        handleSubmit
    }
}

export default usePropertyForm
