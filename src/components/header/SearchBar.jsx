'use client';
import {  MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { useCallback, useReducer, useState } from 'react';
import SearchOption from './SearchOption';
import { searchReducer } from '@/reducers/searchReducer';
import { initialSearchData, searchActions } from '@/store/searchConstants';
import { useRouter } from "next/navigation";
import SearchCitiesList from './SearchCitiesList';

const SearchBar = ({placeholder}) => {
  const [input,setInput] = useState('');
  const [open,setOpen] = useState(false);
  const router = useRouter();
   
  const [searchData,searchDispatch] = useReducer(searchReducer,initialSearchData);
  const handleSubmit = useCallback( (e) => {
    e.preventDefault();
    
    const trimmedLocation = searchData.location.trim();
    if (!trimmedLocation) return; // Do not proceed if location is empty 

    const params = new URLSearchParams({
      location : trimmedLocation,
      startDate : searchData.startDate,
      endDate : searchData.endDate,
      numOfGuests : searchData.numOfGuests,
    }).toString();
     router.push(`/search?${params}`);
     setInput("");
  },[searchData, router]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
    searchDispatch({ type: searchActions.SET_LOCATION, payload: e.target.value });

  }

  const handleInputFocus = (e) => {
    setOpen(!open);
  }
  return (
    <div className='relative '>
       <form onSubmit={handleSubmit} className="w-full max-w-md h-12 flex items-center bg-white rounded-lg shadow-sm lg:ml-6  ">
         
          <input 
                type="text" 
                name="search"
                value={input}
                placeholder={placeholder || 'Where are you going?'}
                className='h-12 pr-10 text-sm text-gray-600 placeholder-gray-400 flex-grow pl-3 bg-white outline-none '
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onInput={handleInputFocus}
                 aria-label="Search location"
                />
                
            {/* {input && 
              <button
                type="button"
                aria-label="Clear search input"
                onClick={() => setInput('')}
                className="absolute right-15 lg:right-23 top-3    z-50   rounded-full cursor-pointer"
              >
                X
              </button>} */}
          <button type="submit" className="pr-3"  aria-label="Search button">
            <MagnifyingGlassIcon  className="h-8 p-2 bg-red-400 text-white rounded-full cursor-pointer"/>
          </button>
        </form>
        {(open || input) && <SearchCitiesList  setInput={setInput} input={input} />}
         {/* {input && <SearchOption setInput={setInput} handleSubmit={handleSubmit} searchData={searchData} searchDispatch={searchDispatch} />} */}
    </div>
   
  )
}



export default SearchBar
