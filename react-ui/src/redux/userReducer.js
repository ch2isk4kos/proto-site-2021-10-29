export const userReducer = (state = null, action) => {
  switch (action.type) {
    case "LOGGED_IN_USER":
      return action.payload;
    default:
  }
};

// actionType = "LOGGED_IN_USER"
