import { ReservationActions } from '@/constants/reservationConstants';
import { useReservation } from '@/context/ReservationContext';
import {  UsersIcon } from '@heroicons/react/24/solid';
const NumOfGuestsInput = ({property}) => {
      const {reservationData, reservationDispatch , calcTotalPrice} = useReservation();

      const handleGuestsChange = (e) => {
            const guestsNum = Number(e.target.value);
            reservationDispatch({ type: ReservationActions.SET_GUEST_NUM, payload: guestsNum });
            const totalPrice =  calcTotalPrice(property.price_per_night , guestsNum , reservationData.nights);
            reservationDispatch({type: ReservationActions.SET_TOTAL_PRICE , payload: Number(totalPrice) });
            
      }
      return (
        <div className='flex items-center justify-between md:mb-8 md:mx-8 lg:mx-8 pb-1 relative  '>
              <label htmlFor="numOfGuests" className=' text-sm lg:text-base text-gray-700' >Guests</label>
                <div className='flex items-center gap-1'>
                        <UsersIcon className='h-7 ml-10 md:ml-10' />
                        <input 
                              type="number"
                              name="numOfGuests" 
                              id='numOfGuests'
                              value={reservationData.guests}
                              max={property.max_guests}
                              min={1}
                              className='block w-12 py-1 px-2 text-sm text-center border border-gray-300 rounded outline-none focus:border-teal-500'
                              onChange={ (e) =>  handleGuestsChange(e)}
                              aria-label="Number of guests"
                              aria-describedby="max-guests-hint"
                        />
                  <span className="text-xs text-gray-500" id="max-guests-hint">
                        (max: {property.max_guests})
                  </span>
                </div>
      </div>
      
      )
    }

export default NumOfGuestsInput
