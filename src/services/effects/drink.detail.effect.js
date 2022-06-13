import { useEffect, useState } from "react";
import { DrinkService } from "../http/drinks.service";

/** Returns an initial message, a mounted message or destroyed message depeding on the component life cycle state */
export const useDrinkDetail = (id) => {
  const [drink, setDrink] = useState(null);
  useEffect(() => {

    DrinkService.getDrinkById(id)
      .then(data => setDrink(data.drinks[0]))
      .catch(error => setDrink('Error loading: ' + error));

    // Return a function that will be executed when componentWillUnmount (usually remove event listeners)
    return () => {
      setDrink('Message destroyed');
    }
  }, []);
  return drink;
}