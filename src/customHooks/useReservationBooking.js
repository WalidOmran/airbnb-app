// src/hooks/useReservationBooking.js
'use client';
import { useState } from "react";
import { toast } from "sonner";
import { PostData } from "@/data/postData";
import { getData } from "@/data/getData";
import { apiUrl } from "@/utils/utils";
import { useReservation } from "@/context/ReservationContext";
import logger from "@/utils/logger";

const useReservationBooking = ({propertyId, setOpenReservationCard}) => {
  const [isLoading, setIsLoading] = useState(false);
  const {reservationData} = useReservation();

  const isBookingExisting = (bookings) =>
    bookings.filter(item => item.propertyId == propertyId);

  const isDateAvailable = (booking) => {
    const newStartDate = new Date(reservationData.startDate);
    const newEndDate = new Date(reservationData.endDate);
    const existingStartDate = new Date(booking.startDate);
    const existingEndDate = new Date(booking.endDate);

    return (
      newEndDate <= existingStartDate ||
      newStartDate >= existingEndDate 
    );
  };

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
      setIsLoading(true);
      logger.log("Sending reservation data:", reservationData);
      await PostData(`${apiUrl}/bookings`, reservationData);
      setOpenReservationCard(false);
      toast.success('Reservation confirmed successfully!');
    } catch (error) {
      toast.error("An error occurred while processing your reservation. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const processBookingAvailability = async (existingProperty) => {
    setIsLoading(true);
    try {
      if(existingProperty && existingProperty.length > 0) {
        const isAvailable = existingProperty.every((booking) => isDateAvailable(booking));
        if(isAvailable) {
          handleNoConflict();
          await handleSendReservationData();
        } else {
          handleDateConflict(existingProperty);
        }
      } else {
        handleNoConflict();
        await handleSendReservationData();
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleCheckAvailability = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const bookings = await getData(`${apiUrl}/bookings`);     
      const existingProperty = isBookingExisting(bookings);
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
