"use client";

import { uploadToCloudinary } from "@/app/lib/cloudinary";
import { usePropertyFormContext } from "@/context/usePropertyFormContext";
import { useEffect } from "react";


const useImageUpload = () => {
    const { formData, setFormData } = usePropertyFormContext();
    const images = formData.images;
    const handleImageChange = (e)=> {
        const files= Array.from(e.target.files);

        const newImages = files.map((file)=> ({
            file,
            preview: URL.createObjectURL(file)
        }));

        setFormData(prev => ({
            ...prev ,
            images : [...prev.images, ...newImages]
        }));


        e.target.value = null
    }


    const removeImage = (index)=> {

        setFormData((prev)=> {
            const newImages = [...prev.images];
            if(newImages[index]?.preview ) {
                URL.revokeObjectURL(newImages[index].preview);
            }
            return ({
                ...prev,
                images: newImages.filter((_,i)=> i !== index)
            })
        })

    }

    useEffect(() => {
            return () => images.forEach(img => URL.revokeObjectURL(img.preview));
        }, []);
  return {images, handleImageChange,removeImage , uploadToCloudinary}
}

export default useImageUpload
