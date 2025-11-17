import { ReservationActions } from "@/constants/reservationConstants";
import { useReservation } from "@/context/ReservationContext";
import { useEffect, useState } from "react";
import { DateRange } from "react-date-range";
import { checkRangeForDisabledDates, isDateDisabled } from "@/utils/dateUtils";
import { useDisabledDates } from "@/customHooks/useDisabledDates";
import AvailabilityIndicator from "./AvailabilityIndicator";

const SelectReservationDate = ({property}) => {
  const {reservationData, reservationDispatch, calcNights, calcTotalPrice} = useReservation();
  
  // Fetch disabled dates for the property using custom hook 
  const {disabledDates, isLoading: loadingDates , bookings} = useDisabledDates(property.id);
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  const handleSelect = (ranges) => {
    const selectRange = ranges.selection;
    setRange([selectRange]);
    
    const startDateISO = selectRange.startDate.toISOString().split('T')[0];
    const endDateISO = selectRange.endDate.toISOString().split('T')[0];
    
    const nights = calcNights(selectRange.startDate, selectRange.endDate);
    const totalPrice = calcTotalPrice(property.price_per_night, reservationData.guests, nights);
    reservationDispatch({type: ReservationActions.SET_PROPERTY_ID, payload: Number(property.id) });
    reservationDispatch({type: ReservationActions.SET_START_DATE, payload: startDateISO});
    reservationDispatch({type: ReservationActions.SET_END_DATE, payload: endDateISO});
    reservationDispatch({type: ReservationActions.SET_NIGHTS, payload: Number(nights)});
    reservationDispatch({type: ReservationActions.SET_TOTAL_PRICE, payload: Number(totalPrice)});
  };

  useEffect(() => {
    if (reservationData.startDate && reservationData.endDate) {
      setRange([{
        startDate: new Date(reservationData.startDate),
        endDate: new Date(reservationData.endDate),
        key: 'selection'
      }]);
    }
  }, [reservationData.startDate, reservationData.endDate]);
 
  return (
    <div className='md:px-6 md:py-6 max-w-screen-sm'>
        
      <AvailabilityIndicator bookings={bookings} disabledDates={disabledDates} />
      
      <label className="block text-lg font-medium text-gray-700 mb-4">
        Select check-in and check-out dates
      </label>
      
      {loadingDates && (
        <p className="text-sm text-gray-500 mb-2">Loading available dates...</p>
      )}
    
      <DateRange
        editableDateInputs={true}
        rangeColors={['#FD5B61']}
        onChange={(ranges) => handleSelect(ranges)} 
        moveRangeOnFirstSelection={false}
        minDate={new Date()}
        ranges={range}
        disabledDay={(date) => isDateDisabled(date, disabledDates)}
        aria-label="Date range selector"
        aria-describedby="reservation-date-desc"
      />
      
      <label id="reservation-date-desc" className="sr-only">
        Use the calendar to select check-in and check-out dates. Booked dates are disabled.
      </label>

       {/* Legend */}
      <div className="mt-4 flex items-center gap-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-green-100 border border-green-300 rounded"></div>
          <span className="text-gray-600">Available</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-red-100 border border-red-300 rounded flex items-center justify-center text-[8px]">🔒</div>
          <span className="text-gray-600">Booked</span>
        </div>
      </div>
    </div>
  );
};

export default SelectReservationDate;
