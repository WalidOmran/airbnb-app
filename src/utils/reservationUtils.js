export const isDateConflict = (newBooking, existingBookings) => {
  const newStart = new Date(newBooking.startDate).getTime();
  const newEnd = new Date(newBooking.endDate).getTime();

  return existingBookings.filter((booking) => {
    const existingStart = new Date(booking.startDate).getTime();
    const existingEnd = new Date(booking.endDate).getTime();
    return (newStart < existingEnd && newEnd > existingStart);
  });
};

export const buildReservationPayload = (reservationData, userId , propertyId) => {
  const timeStamp = new Date(reservationData.startDate).getTime();
  const currentPropertyId = reservationData.propertyId || propertyId;

  return {
    ...reservationData,
    userId,
    propertyId: String(currentPropertyId),
    id: `res_${userId}_${currentPropertyId}_${timeStamp}`,
    createdAt: new Date().toISOString()
  };

}

export const formatDate = (date) => {
    if (!date) return "";
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2,'0');
      const day = String(date.getDate()).padStart(2,'0');
      return `${year}-${month}-${day}`;
}



export const calcNights = (startDate, endDate) => { 
      if(!startDate || !endDate) return 0; 
      const start = new Date(startDate);
      const end = new Date(endDate);
      const diffTime = end - start;
      const nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return nights > 0 ? nights : 0;
    }

    

export const calcTotalPrice = (pricePerNight,guests,nights) => {
      return (pricePerNight || 0) * (guests || 1 ) * (nights || 0);
    }