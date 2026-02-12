


import React, { useEffect } from 'react'
import SearchBar from './SearchBar'
import { ArrowLeft } from 'lucide-react'

function MobileSearchBar({ placeholder, onClose }) {
  
  return (
    <div className="fixed inset-0 bg-white z-[999] flex flex-col animate-in slide-in-from-bottom duration-300">
      <div className="flex items-center gap-2 p-3 border-b bg-white sticky top-0 z-10">
        <button 
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-full transition-all active:scale-90"
        >
          <ArrowLeft size={24} className="text-gray-700" />
        </button>
        
        <div className="flex-1">
          <SearchBar placeholder={placeholder} onClose={onClose} isMobile={true} /> 
        </div>
      </div>

    
    
    </div>
  )

}


export default MobileSearchBar