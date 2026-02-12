import PriceBreakdown from "./PriceBreakdown";
import useReservationBooking from "@/customHooks/useReservationBooking";
import { useReservation } from "@/context/ReservationContext";
import BookingControls from "./BookingControls";

const ReservationFooter = ({ property, setOpenReservationCard, openAuthModal }) => {
  const { reservationData } = useReservation();
  const { isLoading, handleCheckAvailability } = useReservationBooking({
    propertyId: property.id,
    setOpenReservationCard,
    openAuthModal
  });

  const hasDates = !!(reservationData.startDate && reservationData.endDate);

  return (
    <div className="mt-6 space-y-6 px-0 md:px-4">
      <PriceBreakdown 
        property={property} 
        reservationData={reservationData} 
        hasDates={hasDates} 
      />

    
      <BookingControls 
        isLoading={isLoading}
        hasDates={hasDates}
        onConfirm={handleCheckAvailability}
        onCancel={() => setOpenReservationCard(false)}
      />
      
    </div>
  );
};

export default ReservationFooter;