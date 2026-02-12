
const BookingDetails = ({ booking }) => {
 
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const isCurrentYear = date.getFullYear() === new Date().getFullYear();
    const options = {year: isCurrentYear ? undefined : 'numeric', month: 'short' , day: 'numeric'};

    return date.toLocaleDateString('en-US', options);
  }
  return (
    <div className="flex justify-between items-center mb-3">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Your Stay</span>
          <span className="text-[13px] font-bold text-gray-800 leading-none">
            {formatDate(booking.startDate)} – {formatDate(booking.endDate)}
          </span>
        </div>
        <div className="text-right">
          <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Total</span>
          <p className="text-sm font-black text-gray-900">${booking.totalPrice.toLocaleString()}</p>
        </div>
    </div> 
  )
}

export default BookingDetails
