import { Service } from "./base.service";

class DrinkServiceClass {

  /**
   * Search cocktail by name
   * @param {string} name 
   * @returns {Promise<{drinks: import("../../models/drink.dto").DrinkDTO[]}>}
   */
  getDrinkByName(name) {
    return Service.get(`/search.php?s=${name}`);
  }

  /**
   * List all cocktails by first letter
   * @param {string} firstLetter 
   * @returns {Promise<{drinks: import("../../models/drink.dto").DrinkDTO[]}>}
   */
  getDrinksByFirstLetter(firstLetter) {
    return Service.get(`/search.php?f=${firstLetter}`);
  }

  /**
   * Search ingredient by name
   * @param {string} name 
   * @returns {Promise<{drinks: import("../../models/ingredient.dto").IngredientDTO[]}>}
   */
  getIngredientByname(name) {
    return Service.get(`/search.php?i=${name}`);
  }

  /**
   * Lookup full cocktail details by id
   * @param {string} id 
   * @returns {Promise<{drinks: import("../../models/drink.dto").DrinkDTO[]}>}
   */
  getDrinkById(id) {
    return Service.get(`/lookup.php?i=${id}`);
  }

  /**
   * Lookup ingredient by ID
   * @param {string} id 
   * @returns {Promise<{drinks: import("../../models/ingredient.dto").IngredientDTO[]}>}
   */
  getIngredientById(id) {
    return Service.get(`/lookup.php?iid=${id}`);
  }

  /**
   * Lookup a random cocktail
   * @returns {Promise<{drinks: import("../../models/ingredient.dto").IngredientDTO[]}>}
   */
  getRandomDrink() {
    return Service.get(`/random.php`);
  }

  /**
   * Search by ingredient
   * @param {string} id 
   * @returns {Promise<{drinks: import("../../models/drink.dto").DrinkDTO[]}>}
   */
  getDrinksByIngredient(name) {
    return Service.get(`/filter.php?i=${name}`);
  }

  /**
   * Filter by alcoholic
   * @param {boolean} alcoholic 
   * @returns {Promise<{drinks: import("../../models/drink.dto").DrinkDTO[]}>}
   */
  getByAlcoholic(alcoholic) {
    return Service.get(`/filter.php?a=${alcoholic ? 'Alcoholic' : 'Non_Alcoholic'}`);
  }

  /**
   * Filter by Category
   * @param {string} name 
   * @returns {Promise<{drinks: import("../../models/drink.dto").DrinkDTO[]}>}
   */
  getByCategory(name) {
    return Service.get(`/filter.php?c=${name}`);
  }

  /**
   * Filter by Glass
   * @param {string} name 
   * @returns {Promise<{drinks: import("../../models/drink.dto").DrinkDTO[]}>}
   */
  getByGlass(name) {
    return Service.get(`/filter.php?g=${name}`);
  }
}

export const DrinkService = new DrinkServiceClass();