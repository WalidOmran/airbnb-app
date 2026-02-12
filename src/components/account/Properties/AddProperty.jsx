"use client";
import { Plus } from "lucide-react"

import { useState } from "react";
import { useProperties } from "@/context/PropertyContext";

import PropertyActionModal from "./modals/PropertyActionModal";

const AddProperty = ({isOpen,setIsOpen}) => {
   
    const {isLoading, handleAddProperty} = useProperties();


    const handleSave = async (data)=> {
        await  handleAddProperty({ propertyData: data });
        setIsOpen(false);
    }
  return (
    <div>
      <button 
        onClick={()=> setIsOpen(true)}
        className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-black transition">
          <Plus size={18} /> Add Property
        </button>



        <PropertyActionModal 
            isOpen={isOpen}
            onClose={() => setIsOpen(false)} 
            loading={isLoading}
            mode='add'
        />
         

        

    </div>
  )
}

export default AddProperty
