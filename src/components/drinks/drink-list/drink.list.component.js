import "./drink.list.css";
import { useFilters } from "../../../services/effects/filters.effect"
import { IntersectionWrapperComponent } from "../../shared/intersection-wrapper/intersection.wrapper.component";
import { DrinkItemComponent } from "../drink-item/drink.item.component";

/** Container for the drink list. Displays a list of DrinkItemComponent */
export const DrinkListComponent = () => {
  // Use an effect to get the drink list. It will need to update the list when filters are changed
  // Display a list of the DrinkItems, giving them the needed info
  // Manage the clicks to show an indicator of the selected drink, aswell as prompting a modal with the detail

  /**@type {import("../../../models/drink.dto").DrinkDTO[]} */
  const drinks = useFilters({}).drinks;
  console.log(drinks)
  const componentList = drinks && drinks.length ? drinks.map(drink => {
    return <div key={drink.idDrink}>
      <IntersectionWrapperComponent component={<DrinkItemComponent data={drink}></DrinkItemComponent>}></IntersectionWrapperComponent>
    </div>
  }) : 'No data';

  return (
    <div className="drink-list">
      {componentList}
    </div>
  )
}