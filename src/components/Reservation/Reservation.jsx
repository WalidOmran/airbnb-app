"use client";
import {  useEffect, useState } from 'react';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import ReservationCard from "./ReservationCard";
import { useReservation } from '@/context/ReservationContext';
import { ReservationActions } from '@/constants/reservationConstants';
import useReservationBooking from '@/customHooks/useReservationBooking';
import LoginModal from '../modals/LoginModal';

const Reservation = ({property}) => {
  const [mounted, setMounted] = useState(false);
  const [ openReservationCard ,  setOpenReservationCard] = useState(false);   
  const {reservationData , reservationDispatch } = useReservation();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const openAuthModal = () => {
    setIsAuthModalOpen(true);
  };

  const { isLoading  } = useReservationBooking({
        propertyId: property.id,
        setOpenReservationCard,
        openAuthModal,
      });

  

      useEffect(() => {
        setMounted(true);
      }, []);

    
    useEffect(() => {
      
      if (mounted && reservationData.propertyId === null) {
        reservationDispatch({
          type: ReservationActions.SET_PROPERTY_ID,
          payload: Number(property.id)
        });
      }
    }, [property.id, mounted, reservationData.propertyId, reservationDispatch]);

    if (!mounted) {
      return <div className="hidden md:block h-64 bg-gray-50 animate-pulse rounded-xl"></div>; 
      
    }
  return (
    <>
      <div className="fixed top-0 left-0 bottom-0 right-0 hidden md:flex justify-center-safe md:justify-end-safe  md:w-auto md:sticky bottom-0 md:top-0  bg-white px-6 md:p-0 ">
           
    
        <ReservationCard 
            property={property} 
            openAuthModal={openAuthModal}
        />    
      </div>
      {
        openReservationCard && 
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-white " onClick={() => setOpenReservationCard(false)}  >
          <div className="container">
          <button onClick={() => setOpenReservationCard(false)} className="absolute top-4 right-4 p-2">Close</button>
              <ReservationCard 
                  property={property}   
                  openAuthModal={openAuthModal}
              />
          </div>
              
        </div>
      }
        
      
      
      {
        !openReservationCard && 
        <div className="fixed left-0 bottom-0 w-full bg-white px-6 pt-6 md:hidden">
          <button type="button" onClick={() => setOpenReservationCard(true)}  
                  disabled={isLoading}
                  className="block  mb-6 px-4 py-3 rounded-xl cursor-pointer hover:bg-white bg-red-400 hover:text-red-400 text-white hover:shadow-lg hover:scale-105 transition duration-200 ease-out animate-pulse hover:animate-none  font-bold " aria-label='Check availability button'>
                  Check availability 
          </button> 
        </div>
      }
    {isAuthModalOpen && <LoginModal 
                            isOpen={isAuthModalOpen} 
                            onClose={() => setIsAuthModalOpen(false)} 
                            />
      }
    
    </>
  )
}

export default Reservation
