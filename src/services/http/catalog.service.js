import { Service } from "./base.service";

/** Here are the services with the options */
class CatalogServiceClass {
  
  /**@returns {Promise<{drinks: {strCategory: string}[]}>} */
  getCategories() {
    return Service.get(`/list.php?c=list`);
  }

  /**@returns {Promise<{drinks: {strGlass: string}[]}>} */
  getGlasses() {
    return Service.get(`/list.php?g=list`);
  }

  /**@returns {Promise<{drinks: {strIngredient1: string}[]}>} */
  getIngredients() {
    return Service.get(`/list.php?i=list`);
  }

  /**@returns {Promise<{drinks: {strAlcoholic: string}[]}>} {"drinks":[{"strAlcoholic":"Alcoholic"},{"strAlcoholic":"Non alcoholic"},{"strAlcoholic":"Optional alcohol"}]} */
  getAlcohol() {
    return Service.get(`/list.php?a=list`);
  }
}

export const CatalogService = new CatalogServiceClass();