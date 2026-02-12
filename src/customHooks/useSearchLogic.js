'use client';
import { useState, useCallback, useRef } from 'react';
import { useRouter } from "next/navigation";
import { useSearch } from '@/context/SearchContext';
import { searchActions } from '@/store/searchConstants';
import { useClickOutside } from './useClickOutside';

export const useSearchLogic = ({ onClose, isMobile }) => {
  const [input, setInput] = useState('');
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const searchContainerRef = useRef(null);
  const { searchData, searchDispatch } = useSearch();

  useClickOutside(searchContainerRef, () => setOpen(false));

  const onFormSubmit = useCallback((e, selectedLocation = null) => {
    e?.preventDefault();
    const locationToSearch = selectedLocation || input || searchData.location;
    const trimmedLocation = locationToSearch?.trim();

    if (!trimmedLocation) return;

    const params = new URLSearchParams({
      location: trimmedLocation,
      startDate: searchData.startDate || "",
      endDate: searchData.endDate || "",
      numOfGuests: searchData.numOfGuests || 1,
    }).toString();

    router.push(`/search?${params}`);
    if (isMobile && onClose) {
      onClose();
    }
    setOpen(false); 
  }, [searchData, input, router]);


  const handleSelectCity = (cityName) => {
    setInput(cityName);
    searchDispatch({ 
      type: searchActions.SET_LOCATION, 
      payload: cityName 
    });
    onFormSubmit(null, cityName);

    if (isMobile && onClose) {
      setTimeout(() => onClose(), 150);
    }
    setOpen(false);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return {
    input,
    setInput,
    open,
    setOpen,
    searchContainerRef,
    searchData,
    searchDispatch,
    handleInputChange,
    handleSelectCity,
    onFormSubmit
  };
};