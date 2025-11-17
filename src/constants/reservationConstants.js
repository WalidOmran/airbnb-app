export const ReservationActions = {
  SET_PROPERTY_ID: "SET_PROPERTY_ID",
  SET_LOCATION: "SET_LOCATION",
  SET_START_DATE: "SET_START_DATE",
  SET_END_DATE: "SET_END_DATE",
  SET_GUEST_NUM: "SET_GUEST_NUM",
  SET_NIGHTS: "SET_NIGHTS", 
  SET_TOTAL_PRICE: "SET_TOTAL_PRICE",
};

export const initialReservationData = {
  startDate: null,      // User selects check-in date
  endDate: null,        // User selects check-out date
  guests: 1,            // Default 1 guest
  nights: 0,            // Calculated based on dates
  totalPrice: 0,        // Calculated based on nights and price
  status: "pending",    // pending | confirmed | cancelled
  propertyId: null,     // Set when viewing property
  userId: null,         // Set when user logs in
};
// export const initialAllReservationsData = {
//   Reservations: [],
//   loading : false,
//   error: null,

// }