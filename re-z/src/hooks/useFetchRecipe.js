import { useState, useEffect } from 'react';


export function useFetchRecipe (url) {

  // ------ PARA USAR EL CUSTOM HOOK CONSUMIENDO INFO DEL JSON
  // const [recipe, setRecipe] = useState(url);

  // ------- PARA USAR EL CUSTOM HOOK Y CONSUMIR DE LA API
  const [recipe, setRecipe] = useState([]);


  async function fetchRecipe (url) {
    const response = await fetch(url);
    const data = await response.json();
    setRecipe(data)
  }

  useEffect (() => {
    fetchRecipe(url);
  }, [])


  // -----ESTA LINEA NUNCA SE DEBE DE COMENTAR -----
  return [recipe]
}

