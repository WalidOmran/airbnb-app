import React from 'react'
import SearchBar from './SearchBar'

function MobileSearchBar({ placeholder, onClose }) {
  return (
        <div className="bg-white absolute left-0 right-0 top-0 bottom-0 h-screen py-6 transition-opacity ease-in-out duration-300 z-50">
            <div className="container flex flex-col">
                   <button
                        onClick={onClose}
                        aria-label="Close search"
                        className="ml-auto px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
                        >
                        X
                    </button>
                    <div className='relative top-8 '>
                        <SearchBar placeholder={placeholder} onClose={onClose}/>
                    </div>
            </div>  
        </div>
  )
}

export default MobileSearchBar
