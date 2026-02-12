"use client";
import { searchActions } from '@/store/searchConstants';
import {  UsersIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 

const SearchOption =  ({searchData,searchDispatch,handleSubmit,setInput})=> {
    
    const [range,setRange] = useState([]);

    useEffect(() => {
        setRange([{
            startDate: searchData?.startDate || new Date(),
            endDate: searchData?.endDate || new Date(),
            key: 'selection'
        }]);
    }, [searchData?.startDate, searchData?.endDate]);

    const handleSelect = (ranges)=> {
        const selectRange = ranges.selection;
        setRange([selectRange]);
        searchDispatch({ type: searchActions.SET_START_DATE, payload: selectRange.startDate });
        searchDispatch({ type: searchActions.SET_END_DATE, payload: selectRange.endDate });
    }
    
  return (
    <section className='absolute  top-full left-1/2 mt-3 -translate-x-1/2  bg-white lg:shadow-sm  transform transition duration-300 ease-out'>
     <div>
      <div className='px-8 py-4 max-w-screen-sm  '>
        <DateRangePicker
          ranges={range}
          rangeColors={['#FD5B61']}
          minDate={new Date()}
          onChange={handleSelect} 
          aria-label="Date range selector"
        />
       </div>
      
      <div className='flex items-end justify-around mb-8 mx-8 lg:mx-0 pb-1 relative lg:shadow-sm '>
        <label htmlFor="numOfGuests" className=' text-sm lg:text-2xl' >Number of guests</label>
        <UsersIcon className='h-7 ml-30 md:ml-50' />
        <input 
              type="number"
              test="SET_NUM_OF_GUESTS"
              name="numOfGuests" 
              id='numOfGuests'
              value={searchData?  searchData.numOfGuests : 0 }
              min={1}
              className='block w-10 py-1 mt-3 text-sm  placeholder-gray-400  outline-none' 
              onChange={(e)=> searchDispatch({ type: searchActions.SET_NUM_OF_GUESTS,  payload: Number(e.target.value) })}
              aria-label="Number of guests"
       />
      </div>


      <div className='flex items-end justify-between px-10 mb-8'>
        <button type="button" onClick={()=> setInput("")} className="px-5 py-2 bg-gray-200 text-gray-600 rounded-full cursor-pointer">
           Cancel 
        </button>
        <button type="submit" onClick={handleSubmit} className="px-5 py-2 bg-red-400 text-white rounded-full cursor-pointer">
            Search 
        </button>
      </div>
      </div>
    </section>
  )
}

export default SearchOption;
