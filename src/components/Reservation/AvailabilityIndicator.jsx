import { findNextAvailableDate } from "@/utils/dateUtils";
import { format } from "date-fns";

const AvailabilityIndicator = ({ bookings, disabledDates }) => {
  const totalBookedDays = disabledDates.length;
  const nextAvailableDate = findNextAvailableDate(disabledDates);
  
  return (
    <div className="mb-4 space-y-2">
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-green-50 border border-green-200 rounded-lg p-3">
          <p className="text-xs text-green-600 font-medium">Next Available</p>
          <p className="text-lg font-bold text-green-700">
            {format(nextAvailableDate, 'MMM dd, yyyy')}
          </p>
        </div>
        
        <div className="bg-red-50 border border-red-200 rounded-lg p-3">
          <p className="text-xs text-red-600 font-medium">Booked Days</p>
          <p className="text-lg font-bold text-red-700">
            {totalBookedDays} {totalBookedDays === 1 ? 'day' : 'days'}
          </p>
        </div>
      </div>

      
      <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm text-blue-800">
          💡 <strong>Tip:</strong> Red dates with strikethrough are already booked. 
          Green dates are available for your reservation.
        </p>
      </div>
    </div>
  );
};
export default AvailabilityIndicator;