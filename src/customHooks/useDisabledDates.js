// src/hooks/useDisabledDates.js
import { useEffect, useState, useMemo } from 'react';
import { getData } from '@/data/getData';
import { apiUrl } from '@/utils/utils';
import { getDisabledDatesFromBookings } from '@/utils/dateUtils';
import logger from '@/utils/logger';

/**
 * Custom hook to fetch and calculate disabled dates for a property.
 * @param {number} propertyId - ID of the property
 * @returns {Object} { disabledDates, isLoading, error }
 */
export const useDisabledDates = (propertyId) => {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        setIsLoading(true);
        const allBookings = await getData(`${apiUrl}/bookings`);
        // Filter bookings for this property only
        const propertyBookings = allBookings.filter(
          booking => booking.propertyId == propertyId 
        );
        
        setBookings(propertyBookings);
        setError(null);
      } catch (err) {
        logger.error('Error fetching bookings:', err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    if (propertyId) {
      fetchBookings();
    }
  }, [propertyId]);

  // Calculate disabled dates (memoized)
  const disabledDates = useMemo(() => {
    return getDisabledDatesFromBookings(bookings);
  }, [bookings]);

  return { disabledDates, isLoading, error, bookings };
};
