import { useState, useEffect } from 'react';

import data from '../../recipe.json';

export function useFetchRecipe (url) {
  const [recipe, setRecipe] = useState(url);

  // async function fetchRecipe (url) { // ESTAS LINEAS COMENTADAS SON LAS QUE SE USARAN CUANDO YA TENGAMOS LA URL DE LA API 
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   setRecipe(data)
  // }

  // useEffect (() => {
  //   fetchRecipe(url);
  // }, [])

  return [recipe]
}