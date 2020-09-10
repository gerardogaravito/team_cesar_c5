const initial_state = {
  user: {},
};

const userReducer = (state = initial_state, action) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return { ...state, user: action.payload };

    default:
      return state;
  }
};

export default userReducer;
