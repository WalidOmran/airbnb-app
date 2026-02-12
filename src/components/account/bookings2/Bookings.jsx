"use client";

import Card from "../Card";
import BookingDetails from "./BookingDetails";
import DeleteButton from "../DeleteButton";
import ConfirmationModal from "@/components/modals/ConfirmationModal";
import useManageReservations from "@/customHooks/useManageReservations";

const Bookings = ({bookings}) => {
    
    const { selectedId ,setSelectedId , isDeleting , handleDelete} = useManageReservations();
  
  return (
    <>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookings.map((booking) => (
                <div key={booking.id} className="group bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden">
                
                
                    <Card data={booking.property} />
                    
                    <div className="px-4 pb-4 mt-auto">
                        <div className="pt-3 border-t border-dashed border-gray-200">
                        <BookingDetails booking={booking} />
                        <DeleteButton onClick={() => setSelectedId(booking.id)} deleteText="Cancel Booking" />
                        </div>
                    </div> 

                
                </div>
            ))}
        
        </div>
        <ConfirmationModal
            isOpen={!!selectedId}
            onClose={()=> setSelectedId(null)} 
            onConfirm={handleDelete}
            loading={isDeleting}
            headerText="Cancel Booking"
            descText="Are you sure you want to cancel this booking?"
            confirmText="Yes, Cancel Booking"
            cancelText="Keep Booking"
        />
    </>
  )
}

export default Bookings
