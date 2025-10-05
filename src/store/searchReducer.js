// Search Reducer and related constants (duplicate for store example)

export const searchActions = {
  SET_LOCATION: "SET_LOCATION",
  SET_STRAT_DATE: "SET_STRAT_DATE",
  SET_END_DATE: "SET_END_DATE",
  SET_GEAST_NUM: "SET_GEAST_NUM",
};

export const initialSearchData = {
  location: "",
  stratDate: "",
  endDate: "",
  geastNum: 0,
};

export const searchReducer = (state, action) => {
  switch (action.type) {
    case searchActions.SET_LOCATION:
      return { ...state, location: action.payload };
    case searchActions.SET_STRAT_DATE:
      return { ...state, stratDate: action.payload };
    case searchActions.SET_END_DATE:
      return { ...state, endDate: action.payload };
    case searchActions.SET_GEAST_NUM:
      return { ...state, geastNum: action.payload };
    default:
      return state;
  }
};
