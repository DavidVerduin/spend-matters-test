import { DrinkService } from "./http/drinks.service";

export const FilterToServiceRelation = {
  "ingredient": DrinkService.getDrinksByIngredient
}