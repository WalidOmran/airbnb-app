'use client';
import { useState } from "react";
import { toast } from "sonner";
import { useReservation } from "@/context/ReservationContext";
import logger from "@/utils/logger";
import { reservationService } from "@/services/reservationService";
import { useSession } from "next-auth/react";
import { ReservationActions } from "@/constants/reservationConstants";
import { buildReservationPayload, isDateConflict } from "@/utils/reservationUtils";

const useReservationBooking = ({propertyId, setOpenReservationCard,openAuthModal}) => {
  const { data: session } = useSession(); 
  const userId = session?.user?.id;
  const [isLoading, setIsLoading] = useState(false);
  const {reservationData,reservationDispatch,triggerRefresh} = useReservation();
 


  const isBookingValid = ()=> {
      if (!reservationData.startDate || !reservationData.endDate) {
          toast.error("Please select check-in and check-out dates first.");
          return false;
        }

      if (!userId) {
            if (openAuthModal) openAuthModal();
            else toast.error("Please login to complete your reservation!");
            return false; 
        }

        return true;
  }

  const handleDateConflict = (conflictingBookings) => {
    if(conflictingBookings.length > 0) {
      const firstConflict = conflictingBookings[0];

      toast.error(
        `Overlap detected! Already booked from ${firstConflict.startDate} to ${firstConflict.endDate}`,
        { duration: 5000 } 
      );
  
    }
  };
  const handleSendReservationData = async () => {
    try {
     
      const finalReservationData = buildReservationPayload(reservationData, userId, propertyId);
      await reservationService.create(finalReservationData);
      triggerRefresh();
      reservationDispatch({ type: ReservationActions.RESET_RESERVATION });

      setOpenReservationCard(false);
      toast.success('Reservation confirmed successfully!');
    } catch (error) {
      console.error("Create Reservation Error:", error);
      toast.error("An error occurred while processing your reservation. Please try again.");
    } 
  };

 


  const handleCheckAvailability = async (e) => {
    e.preventDefault();
  
    if (!isBookingValid()) {
      return;
    };
    setIsLoading(true);

    try {
      const propertyBookings = await reservationService.getByPropertyId(propertyId) || [];
      const conflictingBookings = isDateConflict(reservationData,propertyBookings);
     
      if(conflictingBookings.length === 0 ) {
        await handleSendReservationData();
      }else {
        handleDateConflict(conflictingBookings);
      }
      

    } catch (error) {
      logger.error("Error in booking flow:", error);
      toast.error("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, handleCheckAvailability };
};

export default useReservationBooking;
