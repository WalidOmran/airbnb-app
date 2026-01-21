import {initialReservationData, ReservationActions } from "@/constants/reservationConstants";

/**
 * Reservation Reducer to manage reservation state.
 * @param {Object} state - Current state of the reservation. 
 * @param {Object} action - Action to be performed on the state.
 * @returns {Object} - New state after applying the action.
 */


export const reservationReducer = (state, action) => {
      switch(action.type) {
        case ReservationActions.SET_PROPERTY_ID :
          return {...state, propertyId: action.payload }
        case ReservationActions.SET_START_DATE:
          return { ...state, startDate: action.payload};
        case ReservationActions.SET_END_DATE:
          return { ...state, endDate: action.payload};
        case ReservationActions.SET_GUEST_NUM: 
        return { ...state, guests: action.payload};
        case ReservationActions.SET_NIGHTS:
          return { ...state, nights: action.payload};
        case ReservationActions.SET_TOTAL_PRICE:
          return {...state, totalPrice: action.payload};
        case ReservationActions.RESET_RESERVATION:
          return { ...initialReservationData };
          
          default:
            return state
      }
}
    