"use client";

import { AlertCircle } from "lucide-react"; 
import Modal from "./Modal";

const ConfirmationModal = ({
    isOpen,
    onClose, 
    onConfirm,
    loading,
    headerText, 
    descText,
    confirmText = "Confirm", 
    cancelText = "Cancel"

    }) => {
    if (!isOpen) return null;


    return (
      <Modal 
        isOpen={isOpen}
        onClose={onClose} 
        onConfirm={onConfirm}
        loading={loading}
        confirmText={confirmText}
        cancelText={cancelText} 
        variant="danger"
        >
          <div className="mx-auto w-12 h-12 bg-rose-50 rounded-full flex items-center justify-center mb-4">
             <AlertCircle className="text-rose-600" size={28} />  
          </div>
          <h2 className="text-xl font-bold mb-3 text-gray-800">{headerText}</h2>
          <p className="text-gray-600 mb-8 px-4">{descText}</p>

      </Modal>
    )


 
}

export default ConfirmationModal
