import { ReservationActions } from '@/constants/reservationConstants';
import { useReservation } from '@/context/ReservationContext';
import { PlusIcon, MinusIcon, UsersIcon } from '@heroicons/react/24/outline';

const NumOfGuestsInput = ({ property }) => {
  const { reservationData, reservationDispatch, calcTotalPrice } = useReservation();

  const updateGuests = (newValue) => {
    if (newValue < 1 || newValue > property.max_guests) return;
    reservationDispatch({ type: ReservationActions.SET_GUEST_NUM, payload: newValue });
    const totalPrice = calcTotalPrice(property.price_per_night, newValue, reservationData.nights);
    reservationDispatch({ type: ReservationActions.SET_TOTAL_PRICE, payload: Number(totalPrice) });
  };

  return (
    <div className='flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100'>
      <div className="flex items-center gap-3">
        <div className="p-2 bg-white rounded-lg shadow-sm">
          <UsersIcon className='h-5 w-5 text-gray-600' />
        </div>
        <div>
          <p className='text-sm font-bold text-gray-800'>Guests</p>
          <p className='text-xs text-gray-500'>Max: {property.max_guests} people</p>
        </div>
      </div>

      <div className='flex items-center gap-4 bg-white p-1 rounded-lg border border-gray-200 shadow-sm'>
       
        <button 
          onClick={() => updateGuests(reservationData.guests - 1)}
          disabled={reservationData?.guests <= 1}
          className="p-1 hover:bg-gray-100 rounded disabled:opacity-30 transition-colors"
        >
          <MinusIcon className="h-5 w-5 text-gray-700" />
        </button>

        <span className='w-4 text-center font-semibold text-gray-800 tabular-nums'>
          {reservationData.guests}
        </span>

        <button 
          onClick={() => updateGuests(reservationData?.guests + 1)}
          disabled={reservationData?.guests >= property.max_guests}
          className="p-1 hover:bg-gray-100 rounded disabled:opacity-30 transition-colors"
        >
          <PlusIcon className="h-5 w-5 text-gray-700" />
        </button>
      </div>
    </div>
  );
}

export default NumOfGuestsInput;