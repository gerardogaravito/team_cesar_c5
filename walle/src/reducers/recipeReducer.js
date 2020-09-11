const initial_state = {
  recipes: {},
};

const recipeReducer = (state = initial_state, action) => {
  switch (action.type) {
    case "GET_RECIPES":
      return { ...state, recipes: action.payload };
    default:
      return state;
  }
};

export default recipeReducer;
