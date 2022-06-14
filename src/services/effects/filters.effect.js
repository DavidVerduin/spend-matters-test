import { useEffect, useState } from "react";
import { EventManagerFactory } from "../event.manager.factory";
import { FilterToServiceRelation } from "../filter.to.service.relation";
import { DrinkService } from "../http/drinks.service";

/**
 * @summary Uses the selected filters combined to call the services, filter the drinks and return them
 * @returns {import("../../models/drink.dto").DrinkDTO[]}
 */
export const useFilters = () => {
  const [filters, setFilters] = useState({});
  const [drinks, setDrinks] = useState([]);
  useEffect(() => {
    // Get the eventService
    const eventService = EventManagerFactory.getEventManager("CONSUME_FILTERS");
    eventService.subscribe("useFiltersEffect", eventData => {
      eventData = eventData || {};
      const newFilters = {...filters, ...eventData};
      Object.keys(newFilters).forEach(key=> !newFilters[key] && delete newFilters[key]);

      setFilters(newFilters);
      // If there are filters selected
      if(newFilters && Object.keys(newFilters) && Object.keys(newFilters).length) {

        // Call the service with the first filter, as they will be applied later via js
        FilterToServiceRelation[Object.keys(newFilters)[0]](newFilters[Object.keys(newFilters)[0]])
        .then(data => {
          // Get all the data since the search service doesn`t return enough information to cross filter
          return Promise.all(data.drinks.map(drink => DrinkService.getDrinkById(drink.idDrink)));
        })
        .then(responseList => {
          // Sets the drinks filtered
          setDrinks(filterData(newFilters, responseList.map(res => res.drinks[0])));
        })
        .catch(console.error);
      } else {
        setDrinks([]);
      }
    });

    // Unsuscribe from the event
    return () => {
      eventService.unsuscribe("useFiltersEffect");
    }
  }, [filters]);
  return drinks;
}

/**
 * @param {{alcoholic: boolean, category: string, glass: string, name: string, ingredient: string}} filter 
 * @param {import("../../models/drink.dto").DrinkDTO[]} data 
 * @returns {import("../../models/drink.dto").DrinkDTO[]} filtered with the given filter
 */
function filterData(filter, data) {
  if(!data || !data.length) return data;

  return data.filter(drink => {
    if(filter.alcoholic) {
      if(drink.strAlcoholic !== 'Alcoholic') return false;
    }
    if(filter.category) {
      if(drink.strCategory !== filter.category) return false;
    }
    if(filter.glass) {
      if(drink.strGlass !== filter.glass) return false;
    }
    if(filter.name) {
      if(drink.strDrink.includes(filter.name)) return false;
    }
    if(filter.ingredient) {
      // Since ingredients are returned this way, we create an aray with them to filter with the ingredient needed
      const ingredients = [
        drink.strIngredient1,
        drink.strIngredient2,
        drink.strIngredient3,
        drink.strIngredient4,
        drink.strIngredient5,
        drink.strIngredient6,
        drink.strIngredient7,
        drink.strIngredient8,
        drink.strIngredient9,
        drink.strIngredient10,
        drink.strIngredient11,
        drink.strIngredient12,
        drink.strIngredient13,
        drink.strIngredient14,
        drink.strIngredient15
      ];
      const filteredIngredients = ingredients.filter(ingredient=> ingredient === filter.ingredient);
      if(filteredIngredients.length === 0) return false;
    }
    return true;
  });
}