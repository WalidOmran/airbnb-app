export const isDateConflict = (newBooking, existingBookings) => {
  const newStart = new Date(newBooking.startDate);
  const newEnd = new Date(newBooking.endDate);

  return existingBookings.some((booking) => {
    const existingStart = new Date(booking.startDate);
    const existingEnd = new Date(booking.endDate);
    return !(newEnd <= existingStart || newStart >= existingEnd);
  });
};

export const buildReservationPayload = (reservationData, userId , propertyId) => {
  const timeStamp = new Date(reservationData.startDate).getTime();
  const currentPropertyId = reservationData.propertyId || propertyId;

  return {
    ...reservationData,
    userId,
    propertyId: Number(currentPropertyId),
    id: `res_${userId}_${currentPropertyId}_${timeStamp}`,
    createdAt: new Date().toISOString()
  };

}

export const isBookingExisting = (bookings , propertyId) =>
  bookings.filter(item => item.propertyId == propertyId);