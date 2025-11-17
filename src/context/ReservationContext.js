'use client';
import { initialReservationData } from "@/constants/reservationConstants";
import { reservationReducer } from "@/reducers/reservationReducer";
import { createContext , useContext , useReducer } from "react";


const ReservationContext = createContext(null);


export const ReservationContextProvider = ({children}) => {
    const [reservationData, reservationDispatch] =  useReducer(reservationReducer, initialReservationData);
    /**
     * Calculates the number of nights between two dates.
     * @param {Date} startDate - The start date of the reservation.
     * @param {Date} endDate - The end date of the reservation.
     * @returns {number} Number of nights.
     */
    const calcNights = (startDate, endDate) => { 
      return Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
    }

    /**
     * Calculates the total price for the reservation.
     * @param {number} pricePerNight - Price per night for the property.
     * @param {number} guests - Number of guests.
     * @param {number} nights - Number of nights.
     * @returns {number} Total price.
     */

    const calcTotalPrice = (pricePerNight,guests,nights) => {
      return pricePerNight * guests * nights;
    }


    return (
        <ReservationContext.Provider value={
            {
                reservationData , 
                reservationDispatch ,
                calcNights ,
                calcTotalPrice
            }} >
            {children}
        </ReservationContext.Provider>
    )
}

export const useReservation = () => {
  const context = useContext(ReservationContext);
  if (!context) {
    throw new Error('useReservation must be used within ReservationContextProvider');
  }
  return context;
};
