import useReservationBooking from "@/customHooks/useReservationBooking";

const ReservationButtons = ({ property , setOpenReservationCard ,openAuthModal }) => {
    const {isLoading, handleCheckAvailability} = useReservationBooking({propertyId: property.id , setOpenReservationCard,openAuthModal});
    
  return (
    <div className='flex items-end justify-between px-0 md:px-6 md:px-4 my-6'>
      <button
        type="button"
        onClick={() => setOpenReservationCard(false)}
        disabled={isLoading}
        className="px-4 py-2 md:px-5 bg-gray-200 text-gray-600 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        aria-label="Cancel reservation"
      >
        Cancel
      </button>
      <button
        type="button"
        onClick={handleCheckAvailability}
        disabled={isLoading}
        
        className={`px-4 py-2 md:px-5 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all
          ${isLoading ? 'bg-red-200 cursor-not-allowed' : 'bg-red-400 text-white hover:bg-red-500'}`}
        aria-label="Confirm reservation"
      >
        {isLoading ? (
           <span className="flex items-center gap-2">Processing...</span>) 
           : ("Confirm Booking")
        }
      </button>
    </div>
  );
}


export default ReservationButtons