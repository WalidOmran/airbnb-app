import { PostData } from "@/data/postData";
import { toast } from "sonner";
import { apiUrl } from "./utils";
import logger from "./logger";

export const isBookingExisting = (bookings, propertyId) =>
  bookings.filter(item => item.property_id == propertyId);


export const isDateAvailable = (booking,reservationData) => {
      const newStartDate = new Date(reservationData.start_date);
      const newEndDate = new Date(reservationData.end_date);
      const existingStartDate = new Date(booking.start_date);
      const existingEndDate = new Date(booking.end_date);

      return (
        newEndDate <= existingStartDate ||
        newStartDate >= existingEndDate 
      );
    } 


export const handleDateConflict = (conflictingBookings) => {
  if(conflictingBookings.length > 0) {
    const msg = conflictingBookings.map(
      item => `The property is booked from ${item.start_date} to ${item.end_date}`
    ).join('\n');
    toast.error(msg || "The property is not available for the selected dates.");
  }
};

export const handleNoConflict = () => {
      // Proceed with reservation
      logger.log("No date conflict. Proceeding with reservation...");
      toast.loading('The property is available for the selected dates. Proceeding with reservation...');

}

export const handleSendReservationData = async (setIsLoading,reservationData,setOpenReservationCard) => {
      // Send reservation data to the backend
      try {
        setIsLoading(true);
        await PostData(`${apiUrl}/bookings`, reservationData);
        setOpenReservationCard(false);
      } catch (error) {
        toast.error("An error occurred while processing your reservation. Please try again. ");
      }finally {
        setIsLoading(false);
      }
      
}