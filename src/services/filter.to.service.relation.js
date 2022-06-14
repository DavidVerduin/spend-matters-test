import { DrinkService } from "./http/drinks.service";

export const FilterToServiceRelation = {
  "ingredient": DrinkService.getDrinksByIngredient,
  "category": DrinkService.getByCategory,
  "glass": DrinkService.getByGlass,
  "alcoholic": DrinkService.getByAlcoholic,
  "name": DrinkService.getDrinkByName
}