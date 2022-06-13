import { useEffect, useState } from "react";
import { CatalogService } from "../http/catalog.service";

/** Effect for the categories list */
export const useIngredientsCatalog = () => {
  const [message, setMessage] = useState();
  useEffect(() => {

    CatalogService.getIngredients()
      .then(data => setMessage(data.drinks.map(elem => elem.strIngredient1)))
      .catch(error => console.error('Error loading: ' + error));

    // Return a function that will be executed when componentWillUnmount (usually remove event listeners)
    return () => { }
  }, []);
  return message;
}