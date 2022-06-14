import { useState } from "react";
import { useCategoriesCatalog } from "../../../services/effects/categories.catalog.effect"
import { useGlassesCatalog } from "../../../services/effects/glass.catalog.effect";
import { useIngredientsCatalog } from "../../../services/effects/ingredients.catalog.effect";
import { EventManagerFactory } from "../../../services/event.manager.factory";
import { FilterDetailComponent } from "../filter-detail/filter.detail.component";

/** Has the list of FilterDetailComponent */
export const FilterSidebarComponent = () => {

  const eventService = EventManagerFactory.getEventManager("CONSUME_FILTERS");
  /** @type {{strCategory:string}[]} */
  const ingredients = useIngredientsCatalog();
  const [ingredientSelected, setIngredientSelected] = useState();
  
  /** @type {{strCategory:string}[]} */
  const categories = useCategoriesCatalog();
  const [categorySelected, setCategorySelected] = useState();

  /** @type {{strCategory:string}[]} */
  const glasses = useGlassesCatalog();
  const [glassSelected, setGlassSelected] = useState();
  
  const selectIngredients = elem => {
    setCategorySelected(null);
    setGlassSelected(null);
    setIngredientSelected(elem);
    eventService.emit({'ingredient': elem});
  }
  
  const selectCategories = elem => {
    setCategorySelected(elem);
    setGlassSelected(null);
    setIngredientSelected(null);
    eventService.emit({'category': elem});
  }
  
  const selectGlasses = elem => {
    setCategorySelected(null);
    setGlassSelected(elem);
    setIngredientSelected(null);
    eventService.emit({'glass': elem});
  }

  return (
    <div>
      <div>
        <FilterDetailComponent label="Ingredients" options={ingredients} selected={ingredientSelected} selectItem={selectIngredients}></FilterDetailComponent>
      </div>
      <div>
        <FilterDetailComponent label="Categories" options={categories} selected={categorySelected} selectItem={selectCategories}></FilterDetailComponent>
      </div>
      <div>
        <FilterDetailComponent label="Glasses" options={glasses} selected={glassSelected} selectItem={selectGlasses}></FilterDetailComponent>
      </div>
    </div>
  )
}