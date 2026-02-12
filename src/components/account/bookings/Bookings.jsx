import SkeletonCard from "../SkeletonCard";

import BookingsList from "./BookingsList";

import useManageReservations from "@/customHooks/useManageReservations";
import EmptyState from "../EmptyState";

const Bookings = () => {
  const {bookings, isLoading} = useManageReservations();

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">My Bookings </h2>
      
      
     
      {isLoading && ( <SkeletonCard count={3} />)}


       {!isLoading && bookings.length === 0 && (
            <EmptyState 
              type="bookings"
              title="Your world is waiting"
              description="Your reservation list is empty. Start exploring our hand-picked collection of unique homes for your next journey."
              buttonText="Discover Destinations" 
            />
          )}

     
      {!isLoading && bookings.length > 0 && <BookingsList bookings={bookings} />}

   
    </div>
  );
}

export default Bookings;