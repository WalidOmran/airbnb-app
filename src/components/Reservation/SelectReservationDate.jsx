import { ReservationActions } from "@/constants/reservationConstants";
import { useReservation } from "@/context/ReservationContext";
import { useEffect, useState } from "react";
import { DateRange } from "react-date-range";
import { checkRangeForDisabledDates, isDateDisabled } from "@/utils/dateUtils";
import { useDisabledDates } from "@/customHooks/useDisabledDates";
import AvailabilityIndicator from "./AvailabilityIndicator";
import { formatDate } from "@/utils/reservationUtils";

const SelectReservationDate = ({property}) => {
  const {reservationData, reservationDispatch, calcNights, calcTotalPrice} = useReservation();
  

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
    
    const startDateISO = formatDate(selectRange.startDate);
    const endDateISO = formatDate(selectRange.endDate);

    // const startDateISO = selectRange.startDate.toISOString().split('T')[0];
    // const endDateISO = selectRange.endDate.toISOString().split('T')[0];
    
    const nights = calcNights(selectRange.startDate, selectRange.endDate);
    const totalPrice = calcTotalPrice(property.price_per_night, reservationData.guests, nights);
    reservationDispatch({type: ReservationActions.SET_PROPERTY_ID, payload: Number(property.id) });
    reservationDispatch({type: ReservationActions.SET_START_DATE, payload: startDateISO});
    reservationDispatch({type: ReservationActions.SET_END_DATE, payload: endDateISO});
    reservationDispatch({type: ReservationActions.SET_NIGHTS, payload: Number(nights)});
    reservationDispatch({type: ReservationActions.SET_TOTAL_PRICE, payload: Number(totalPrice)});
  };

  useEffect(() => {
    if (!reservationData) return;
    if (reservationData.startDate && reservationData.endDate) {
      setRange([{
        startDate: new Date(reservationData.startDate + "T12:00:00"),
        endDate: new Date(reservationData.endDate + "T12:00:00"),
        key: 'selection'
      }]);
    }
  }, [reservationData?.startDate, reservationData?.endDate]);
 
  return (
    <div className='md:px-4 md:py-0 max-w-screen-sm'>
        <div className="max-w-md mx-auto md:max-w-full">
          <AvailabilityIndicator bookings={bookings} disabledDates={disabledDates} />
        </div>
      
      
      <label className="block text-lg font-medium text-gray-400 mb-4">
        Select Dates
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
        months={1} 
        direction="vertical"
        showDateDisplay={false}
        className="w-full flex justify-center"
      />
      
      <label id="reservation-date-desc" className="sr-only">
        Use the calendar to select check-in and check-out dates. Booked dates are disabled.
      </label>

      <p className="mt-3 text-[11px] text-gray-400 text-center italic">
        * Booked dates are marked with 🔒 and cannot be selected.
      </p>
      
    </div>
  );
};

export default SelectReservationDate;
