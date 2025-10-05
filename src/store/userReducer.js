// Example userReducer.js for demonstration

export const userActions = {
  SET_USER: "SET_USER",
  LOGOUT: "LOGOUT",
};

export const initialUserData = {
  user: null,
};

export const userReducer = (state, action) => {
  switch (action.type) {
    case userActions.SET_USER:
      return { ...state, user: action.payload };
    case userActions.LOGOUT:
      return { ...state, user: null };
    default:
      return state;
  }
};
