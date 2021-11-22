export const userReducer = (state = null, action) => {
  switch (action.type) {
    case "CURRENT_USER":
      return action.payload;
    case "SIGN_IN":
      return action.payload;
    case "SIGN_OUT":
      return action.payload;
    default:
      return state;
  }
};

// actionType = "CURRENT_USER"
// action.payload ~> updated user state
