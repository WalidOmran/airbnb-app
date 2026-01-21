'use client';
import { useState } from "react";
import { toast } from "sonner";
import { useReservation } from "@/context/ReservationContext";
import logger from "@/utils/logger";
import { reservationService } from "@/services/reservationService";
import { useSession } from "next-auth/react";
import { ReservationActions } from "@/constants/reservationConstants";
import { buildReservationPayload, isBookingExisting, isDateConflict } from "@/utils/reservationUtils";

const useReservationBooking = ({propertyId, setOpenReservationCard,openAuthModal}) => {
  const { data: session } = useSession(); 
  const userId = session?.user?.id;
  const [isLoading, setIsLoading] = useState(false);
  const {reservationData,reservationDispatch} = useReservation();

  
  const handleDateConflict = (conflictingBookings) => {
    if(conflictingBookings.length > 0) {
      const msg = conflictingBookings.map(
        item => `The property is booked from ${item.startDate} to ${item.endDate}`
      ).join('\n');
      toast.error(msg || "The property is not available for the selected dates.");
    }
  };

  const handleNoConflict = () => {
    logger.log("No date conflict. Proceeding with reservation...");
    toast.success('The property is available! Processing your reservation...');
  };

  const handleSendReservationData = async () => {
    try {
     
      const finalReservationData = buildReservationPayload(reservationData, userId, propertyId);
      await reservationService.create(finalReservationData);
      reservationDispatch({ type: ReservationActions.RESET_RESERVATION });
      setOpenReservationCard(false);
      toast.success('Reservation confirmed successfully!');
    } catch (error) {
      toast.error("An error occurred while processing your reservation. Please try again.");
    } 
  };

  const processBookingAvailability = async (existingProperty) => {
    
    try {
      
        const hasConflict = isDateConflict(reservationData,existingProperty);
        
        if(!hasConflict) {
          handleNoConflict();
          await handleSendReservationData();
        } else {
          handleDateConflict(existingProperty);
        }
    
    }catch(err) {
      toast.error("An error occurred while checking availability. Please try again.");
    }
  };
  const handleCheckSelectData = () => {
    if (!reservationData.startDate || !reservationData.endDate) {
      toast.error("Please select check-in and check-out dates first.");
      return false; 
    }
    return true; 
  };
  const handleCheckUserId = () => {
    if (!userId) {
      if (openAuthModal) openAuthModal();
      else toast.error("Please login to complete your reservation!");
      return false; 
    }
    return true;
  };
  const handleCheckAvailability = async (e) => {
    e.preventDefault();
    if (!handleCheckSelectData() || !handleCheckUserId()) return;
    setIsLoading(true);

    try {
   
      const bookings = await reservationService.getAll();  
      const existingProperty = isBookingExisting(bookings,propertyId); 
      await processBookingAvailability(existingProperty);

    } catch (error) {
      toast.error("An error occurred while checking availability. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, handleCheckAvailability };
};

export default useReservationBooking;
