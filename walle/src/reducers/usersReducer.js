const initial_state = {
  user: {},
};

const userReducer = (state = initial_state, action) => {
  switch (action.type) {
    case "replace":
      return state;

    default:
      return state;
  }
};

export default userReducer;
