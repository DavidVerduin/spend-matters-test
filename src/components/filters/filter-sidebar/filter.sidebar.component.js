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
    if(ingredientSelected !== elem) {
      setIngredientSelected(elem);
      eventService.emit({'ingredient': elem});
    } else {
      setIngredientSelected(null);
      eventService.emit({'ingredient': null});
    }
  }
  
  const selectCategories = elem => {
    if(ingredientSelected !== elem) {
      setCategorySelected(elem);
      eventService.emit({'category': elem});
    } else {
      setCategorySelected(null);
      eventService.emit({'category': null});
    }
  }
  
  const selectGlasses = elem => {
    if(ingredientSelected !== elem) {
      setGlassSelected(elem);
      eventService.emit({'glass': elem});
    } else {
      setGlassSelected(null);
      eventService.emit({'glass': null});
    }
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