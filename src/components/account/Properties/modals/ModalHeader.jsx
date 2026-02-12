import { HousePlus ,Building2  } from "lucide-react"; 

const ModalHeader = ({modalTitle , modalDesc })=> {
  return (
    <div className="flex flex-col items-center justify-center mb-4 transition-all duration-700 ease-out transform animate-in fade-in zoom-in-95 slide-in-from-bottom-2">
          
              <div className="p-4 bg-emerald-50 rounded-full text-emerald-600 mb-3 shadow-sm">
                  <Building2 size={32} className="animate-pulse" /> 
              </div>
              
              <h3 className="text-xl font-bold text-gray-900"> {modalTitle}</h3>
              <p className="text-sm text-gray-500 text-center max-w-[280px]">
                   {modalDesc}
                  
              </p>
    </div> 
  )
}

export default ModalHeader
