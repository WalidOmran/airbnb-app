const BookingControls = ({ isLoading, hasDates, onConfirm, onCancel }) => {
  return (
    <div className="flex flex-col gap-3 w-full">
      <button
        type="button"
        onClick={onConfirm}
        disabled={isLoading || !hasDates}
        className={`w-full py-4 rounded-2xl font-bold text-lg transition-all shadow-lg active:scale-[0.98]
          ${isLoading || !hasDates 
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
            : 'bg-[#FD5B61] text-white hover:bg-[#E31C5F] shadow-red-100'}`}
      >
        {isLoading ? (
          <span className="flex items-center justify-center gap-2">
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            Processing...
          </span>
        ) : (
          hasDates ? "Confirm Booking" : "Select Dates to Book"
        )}
      </button>

      <button
        type="button"
        onClick={onCancel}
        className="text-gray-400 text-sm font-medium hover:text-gray-600 transition-colors py-2"
      >
        Cancel and go back
      </button>
    </div>
  );
};


export default BookingControls