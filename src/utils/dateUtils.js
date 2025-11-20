/**
 * Generates all dates between start and end date (inclusive).
 * @param {Date} startDate - Start date
 * @param {Date} endDate - End date
 * @returns {Date[]} Array of Date objects
 */
export const getAllDaysBetween = (startDate, endDate) => {
  const dates = [];
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  start.setHours(0, 0, 0, 0);
  end.setHours(0, 0, 0, 0);
  
  let currentDate = new Date(start);
  
  while (currentDate <= end) {
    dates.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }
  
  return dates;
};

/**
 * Converts booking ranges to array of disabled dates.
 * @param {Array} bookings - Array of booking objects
 * @returns {Date[]} Array of all booked dates
 */
export const getDisabledDatesFromBookings = (bookings) => {
  const allDates = [];
  bookings.forEach(booking => {
    const startDate = new Date(booking.startDate);
    const endDate = new Date(booking.endDate);
    allDates.push(...getAllDaysBetween(startDate, endDate));
  });
  return allDates;
};



/**
 * Checks if a given date is in the disabled dates array.
 * @param {Date} date - Date to check
 * @param {Date[]} disabledDates - Array of disabled dates
 * @returns {boolean} true if date is disabled
 */
export const isDateDisabled = (date, disabledDates) => {
  const dateToCheck = new Date(date);
  dateToCheck.setHours(0, 0, 0, 0);
  
  return disabledDates.some(disabledDate => {
    const disabled = new Date(disabledDate);
    disabled.setHours(0, 0, 0, 0);
    return dateToCheck.getTime() === disabled.getTime();
  });
};


/**
 * Find the next available date (not disabled).
 * @param {Date[]} disabledDates - Array of disabled dates
 * @returns {Date} Next available date
 */
export const findNextAvailableDate = (disabledDates) => {
  let currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);
 

  while (isDateDisabled(currentDate, disabledDates)) {
    currentDate.setDate(currentDate.getDate() + 1);
  }
  
  return currentDate;
};

/**
 * Checks if a date range contains any disabled dates.
 * @param {Date} startDate - Start date of range
 * @param {Date} endDate - End date of range
 * @param {Date[]} disabledDates - Array of disabled dates
 * @returns {boolean} true if range contains disabled dates
 */
export const checkRangeForDisabledDates = (startDate, endDate, disabledDates) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  start.setHours(0, 0, 0, 0);
  end.setHours(0, 0, 0, 0);
  
  let currentDate = new Date(start);
  
  while (currentDate <= end) {
    if (isDateDisabled(currentDate, disabledDates)) {
      return true; 
    }
    currentDate.setDate(currentDate.getDate() + 1);
  }
  
  return false; 
};

