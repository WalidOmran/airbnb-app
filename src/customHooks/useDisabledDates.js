import { useEffect, useState, useMemo } from 'react';
import { getDisabledDatesFromBookings } from '@/utils/dateUtils';
import logger from '@/utils/logger';
import { useReservation } from '@/context/ReservationContext';
import { reservationService } from '@/services/reservationService';


export const useDisabledDates = (propertyId) => {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { refreshKey } = useReservation();

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        setIsLoading(true);
        const propertyBookings = await reservationService.getByPropertyId(propertyId);
        setBookings(propertyBookings || []);
        setError(null);
      } catch (err) {
        logger.error(`[useDisabledDates] Failed to fetch for ID: ${propertyId}`, err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    if (propertyId) {
      fetchBookings();
    }
  }, [propertyId,refreshKey]);


  const disabledDates = useMemo(() => {
    return getDisabledDatesFromBookings(bookings);
  }, [bookings]);

  return { disabledDates, isLoading, error, bookings };
};
