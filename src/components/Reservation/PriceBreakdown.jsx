const PriceBreakdown = ({ property, reservationData, hasDates }) => {
  if (!hasDates) {
    return (
      <div className="py-4 px-2 bg-gray-50 rounded-xl border border-dashed border-gray-200">
        <p className="text-center text-xs text-gray-400 font-medium">
          Please select dates to calculate final price
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3 border-t border-gray-100 pt-5 animate-in fade-in duration-500">
      <div className="flex justify-between text-gray-500 text-sm">
        <span>${property.price_per_night} × {reservationData.nights} nights</span>
        <span className="font-medium text-gray-700">${reservationData.totalPrice}</span>
      </div>
      
      <div className="flex justify-between text-gray-500 text-sm">
        <span className="underline italic">Service fee</span>
        <span className="text-green-600 font-medium">Free</span>
      </div>

      <div className="h-[1px] bg-gray-100 my-2"></div>

      <div className="flex justify-between items-center">
        <span className="text-base font-bold text-gray-800">Total amount</span>
        <span className="text-xl font-black text-gray-900">${reservationData.totalPrice}</span>
      </div>
    </div>
  );
};

export default PriceBreakdown;