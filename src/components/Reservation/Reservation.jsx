"use client";
import {  useEffect, useState } from 'react';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import ReservationCard from "./ReservationCard";
import { useReservation } from '@/context/ReservationContext';
import { ReservationActions } from '@/constants/reservationConstants';
import useReservationBooking from '@/customHooks/useReservationBooking';
import LoginModal from '../modals/LoginModal';
import { ArrowBigLeft, ArrowLeft, ArrowUpWideNarrow } from 'lucide-react';





const Reservation = ({property}) => {
  const [mounted, setMounted] = useState(false);
  const [openReservationCard, setOpenReservationCard] = useState(false);   
  const {reservationData, reservationDispatch} = useReservation();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const openAuthModal = () => setIsAuthModalOpen(true);

  const { isLoading } = useReservationBooking({
    propertyId: property.id,
    setOpenReservationCard,
    openAuthModal,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && property.id) {
      reservationDispatch({
        type: ReservationActions.SET_PROPERTY_ID,
        payload: Number(property.id)
      });
    }
  }, [property.id, mounted, reservationDispatch]);

  if (!mounted) return <div className="hidden md:block h-64 bg-gray-50 animate-pulse rounded-xl"></div>;

  return (
    <>
      {/* Desktop Version: Sticky Card */}
      <aside className="hidden md:block sticky top-28 ">
        <ReservationCard 
          property={property} 
          openAuthModal={openAuthModal}
        />    
      </aside>

      {/* Mobile Version: Full Screen Overlay */}
      {openReservationCard && (
        <div className="fixed inset-0 bg-white z-[9999] flex flex-col md:hidden">
          <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center z-[10000]">
            <button 
              onClick={() => setOpenReservationCard(false)} 
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ArrowLeft size={14}/>
              
            </button>
            <h3 className="font-bold text-lg">Confirm dates</h3>
            <div className="w-10"></div> 
          </div>
          <div className="flex-1 overflow-y-auto p-4 pb-24">
            <ReservationCard 
              property={property}   
              openAuthModal={openAuthModal}
            />
          </div>
        </div>
      )}

      {/* Mobile Bottom Bar: The "Trigger" */}
      {!openReservationCard && (
        <div className="fixed left-0 bottom-0 w-full bg-white border-t border-gray-100 px-6 py-4 md:hidden z-50 flex justify-between items-center">
          <div>
            <span className="text-lg font-bold">${property.price_per_night}</span>
            <span className="text-gray-500 text-sm"> / night</span>
          </div>
          <button 
            type="button" 
            onClick={() => setOpenReservationCard(true)}  
            disabled={isLoading}
            className="px-8 py-3 rounded-xl bg-[#FF385C] text-white font-bold shadow-lg active:scale-95 transition-all"
          >
            {isLoading ? "Loading..." : "Check availability"}
          </button> 
        </div>
      )}

      {isAuthModalOpen && (
        <LoginModal 
          isOpen={isAuthModalOpen} 
          onClose={() => setIsAuthModalOpen(false)} 
        />
      )}
    </>
  );
}


export default Reservation


