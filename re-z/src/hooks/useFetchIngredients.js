import { useState, useEffect } from 'react';


export function useFetchIngredients (url) {

  // ------ PARA USAR EL CUSTOM HOOK CONSUMIENDO INFO DEL JSON
  // const [recipe, setRecipe] = useState(url);

  // ------- PARA USAR EL CUSTOM HOOK Y CONSUMIR DE LA API
  const [ingredients, setIngredients] = useState([]);


  async function fetchIngredients (url) {
    const response = await fetch(url);
    const data = await response.json();
    setIngredients(data)
  }

  useEffect (() => {
    fetchIngredients(url);
  }, [])


  // -----ESTA LINEA NUNCA SE DEBE DE COMENTAR -----
  return [ingredients]
}

