import { findNextAvailableDate } from "@/utils/dateUtils";
import { format } from "date-fns";

const AvailabilityIndicator = ({ bookings, disabledDates }) => {
  const totalBookedDays = disabledDates.length;
  const nextAvailableDate = findNextAvailableDate(disabledDates);
  
  return (
    <div className='w-full'>
      <div className="flex items-center justify-between mb-4 px-1">
        <div className="flex flex-col">
          <span className="text-xs text-gray-400 uppercase font-bold tracking-wider">Availability</span>
          <span className="text-sm font-semibold text-green-600">
            Next: {format(nextAvailableDate, 'MMM dd')}
          </span>
        </div>
        <div className="bg-red-50 px-3 py-1 rounded-full border border-red-100">
          <span className="text-[11px] font-bold text-red-600">{totalBookedDays} Days Booked</span>
        </div>
      </div>
    </div>
  );
};
export default AvailabilityIndicator;