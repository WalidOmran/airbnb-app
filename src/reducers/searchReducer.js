import { searchActions, initialSearchData } from '../store/searchConstants';

export const searchReducer = (state, action) => {
  switch (action.type) {
    case searchActions.SET_LOCATION:
      return { ...state, location: action.payload };
    case searchActions.SET_START_DATE:
      return { ...state, startDate: action.payload };
    case searchActions.SET_END_DATE:
      return { ...state, endDate: action.payload };
    case searchActions.SET_NUM_OF_GUESTS:
      return { ...state, numOfGuests: action.payload };
    default:
      return state;
  }
};
