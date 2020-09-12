import data from "../fake-data/recipe.json";

export const getRecipes = () => (dispatch) => {
  dispatch({
    type: "GET_RECIPES",
    payload: data.recipes,
  });
};

// export const getRecipe = (payload) => {
//   return {
//     type: "GET_RECIPES",
//     payload,
//   };
// };
