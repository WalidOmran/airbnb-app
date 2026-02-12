"use client";

import { useState } from "react";
import Modal from "../../../modals/Modal";
import ModalHeader from "./ModalHeader";
import PropertyForm from "./PropertyForm";
import { useProperties } from "@/context/PropertyContext";
import { PropertyFormContextProvider } from "@/context/usePropertyFormContext";


const PropertyActionModal = ({mode,isOpen,onClose, property}) => {
    const { isLoading } = useProperties();
    const title = (mode === 'add') ? "Add New Property" : "Edit Your Listing";
    const desc = mode === 'add' 
        ? "Fill in the details below to list your property on our platform." 
        : "Update your property details to keep your listing accurate and attractive.";
  if (!isOpen) return null;
    return (
      <Modal 
        isOpen={isOpen}
        onClose={onClose} 
        loading={isLoading}
        variant="Primary"
        >

            <ModalHeader 
                modalTitle={title}
                modalDesc={desc}
            />
            <PropertyFormContextProvider 
              initialData={mode === 'edit' ? property : null}
              key={property?.id || 'new'}
              >
                <PropertyForm  onSuccess={onClose} />
            </PropertyFormContextProvider>
         
      </Modal>
    )
}

export default PropertyActionModal
