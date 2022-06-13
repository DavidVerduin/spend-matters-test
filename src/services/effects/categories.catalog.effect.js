import { useEffect, useState } from "react";
import { CatalogService } from "../http/catalog.service";

/** Effect for the categories list */
export const useCategoriesCatalog = () => {
  const [message, setMessage] = useState();
  useEffect(() => {

    CatalogService.getCategories()
      .then(data => setMessage(data.drinks.map(elem => elem.strCategory)))
      .catch(error => console.error('Error loading: ' + error));

    // Return a function that will be executed when componentWillUnmount (usually remove event listeners)
    return () => { }
  }, []);
  return message;
}