import "./drink.list.css";
import { useFilters } from "../../../services/effects/filters.effect"
import { DrinkItemComponent } from "../drink-item/drink.item.component";

/** Container for the drink list. Displays a list of DrinkItemComponent */
export const DrinkListComponent = () => {

  /**@type {import("../../../models/drink.dto").DrinkDTO[]} */
  const drinks = useFilters({});
  const componentList = drinks && drinks.length ? drinks.map(drink => {
    return <div key={drink.idDrink}>
     <DrinkItemComponent data={drink}></DrinkItemComponent>
    </div>
  }) : 'Select a filter';

  return (
    <div className="drink-list">
      {componentList}
    </div>
  )
}