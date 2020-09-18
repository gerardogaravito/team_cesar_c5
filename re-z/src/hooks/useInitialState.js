import { useState, useEffect } from 'react';

const useInitialState = (API) => {
    const [ recipe, setRecipes ] = useState([]);
  useEffect(() => {
      fetch(API)
          .then(response => response.json())
          .then(data => setRecipes(data));
  }, []);

  return recipe;
}

export default useInitialState;