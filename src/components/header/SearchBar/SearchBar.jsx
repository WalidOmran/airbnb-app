'use client';

import SearchCitiesList from './SearchCitiesList';
import { Search } from 'lucide-react';

import { useSearchLogic } from '@/customHooks/useSearchLogic';

const SearchBar = ({placeholder,isMobile ,onClose}) => {
  const {
    input,
    open,
    setOpen,
    searchContainerRef,
    handleInputChange,
    handleSelectCity,
    onFormSubmit
  } = useSearchLogic({ onClose, isMobile });




  return (
    <div ref={searchContainerRef} className="relative w-full max-w-[400px] lg:max-w-[500px]">
       <form onSubmit={onFormSubmit} 
       className={`
          flex items-center bg-white border border-gray-200 rounded-full py-2 px-2 shadow-sm 
          hover:shadow-md transition-all duration-300
          ${open ? "ring-2 ring-gray-100 shadow-lg" : ""}
        `}
       >
         
          <input 
                type="text" 
                name="search"
                value={input}
                placeholder={placeholder || 'Where to?'}
                autoComplete="off"
                className="flex-grow pl-4 bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400"
                onChange={handleInputChange}
                onFocus={() => setOpen(true)}
                 aria-label="Search location"
                />
                <button 
                  type='submit'
                  className="bg-[#FF385C] hover:bg-[#E31C5F] p-2.5 rounded-full text-white transition-colors"
                  aria-label="Search button"
                >
                  
                  <Search size={18} strokeWidth={2} />
                </button>
           
         
        </form>
        {(open || input) &&
         <SearchCitiesList  
            input={input}
            handleSelectCity={handleSelectCity}
            isMobile={isMobile}
            />
         }
        
    </div>
   
  )
}



export default SearchBar

