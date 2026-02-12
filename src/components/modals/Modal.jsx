import { X } from "lucide-react";


 const ModalButtons  = ({onClose,loading,onConfirm,confirmText, cancelText}) => {
    return (
        <div className="space-y-3">
              <button 
                onClick={onConfirm}
                disabled={loading}
                className="block w-full py-3 bg-rose-600 hover:bg-rose-700 text-white text-center font-semibold rounded-xl transition shadow-md"
              >
                
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  
                  confirmText || "Yes, Cancel"
                )}
              </button>
              
              <button 
                onClick={onClose}
                className="w-full py-3 border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold rounded-xl transition"
                disabled={loading}
              >
                {cancelText || "Keep"}
              </button>
        </div>
    )
  }

  const CloseButton = ({onClose}) => {
    return (
         <button 
            onClick={onClose} 
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition text-gray-500"
        >
            <X size={20} />
        </button>
    )
  }


const Modal = ({ isOpen, onClose,onConfirm, children,loading,confirmText = "Confirm" , cancelText = "Cancel" }) => {
  if (!isOpen) return null;

 
  return (
     <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm transition-all">
      
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">        
       <CloseButton onClose={onClose} />

        <div className="p-8 mt-5 text-center">
          {children}
           {
            onConfirm && (
              <ModalButtons onClose={onClose} loading={loading} onConfirm={onConfirm} confirmText={confirmText} cancelText={cancelText} />
            )
           }
          
        </div>
      </div>
    </div>
  )
}

export default Modal
