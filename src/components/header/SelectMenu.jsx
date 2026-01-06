
import { useState } from 'react';

const cities = ["Shopping", "Images", "News", "Finance"];
const SelectMenu = () =>  {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("All cities");


  return (
    <div className="flex  rounded-base -space-x-0.5 relative ">
      <button
        id="dropdown-button"
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="inline-flex items-center shrink-0
         z-10 text-body hover:text-black font-medium leading-5
          rounded-s-base text-sm px-4 py-3.5 focus:outline-none"
      >
        <svg className="w-4 h-4 mr-1.5" aria-hidden="true" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M9.143 4H4.857A.857.857 0 0 0 4 4.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 10 9.143V4.857A.857.857 0 0 0 9.143 4Z M19.143 4h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 20 9.143V4.857A.857.857 0 0 0 19.143 4Zm-10 10H4.857a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286A.857.857 0 0 0 9.143 14Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286a.857.857 0 0 0-.857-.857Z"/>
        </svg>
        {selected}
        <svg className="w-4 h-4 ml-1.5" aria-hidden="true" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7"/>
        </svg>
      </button>
      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute top-full left-0 z-10 bg-white border border-gray-300 rounded-base shadow-lg w-full">
          <ul className=" text-sm text-gray-700 font-medium rounded-lg">
            {cities.map((city) => (
              <li key={city}>
                <button
                  className="block w-full text-left px-3 p-3 hover:bg-red-300 hover:text-white "
                  onClick={() => {
                    setSelected(city);
                    setIsOpen(false);
                  }}
                >
                  {city}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SelectMenu 