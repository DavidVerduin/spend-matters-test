import { useState } from "react";
import { useCategoriesCatalog } from "../../services/effects/categories.catalog.effect"
import { useIngredientsCatalog } from "../../services/effects/ingredients.catalog.effect";
import { EventManagerFactory } from "../../services/event.manager.factory";
import { FilterDetailComponent } from "./filter.detail.component";

/** Has the list of FilterDetailComponent */
export const FilterSidebarComponent = () => {

  const eventService = EventManagerFactory.getEventManager("CONSUME_FILTERS");
  /** @type {{strCategory:string}[]} */
  const ingredients = useIngredientsCatalog();
  const [ingredientSelected, setIngredientSelected] = useState();
  
  /** @type {{strCategory:string}[]} */
  const categories = useCategoriesCatalog();
  const [categorySelected, setCategorySelected] = useState();
  
  const selectIngredients = elem => {
    console.log("selected ingredient", elem);
    setCategorySelected(null);
    setIngredientSelected(elem);
    eventService.emit({'ingredient': elem});
  }
  return (
    <div>
      <div>
        <FilterDetailComponent label="Ingredients" options={ingredients} selected={ingredientSelected} selectItem={selectIngredients}></FilterDetailComponent>
      </div>
      <div>
        <FilterDetailComponent label="Categories" options={categories} selected={categorySelected}></FilterDetailComponent>
      </div>
    </div>
  )
}