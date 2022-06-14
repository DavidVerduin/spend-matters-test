import "./drink.item.css";
import { useDrinkDetail } from "../../../services/effects/drink.detail.effect";
import { EventManagerFactory } from "../../../services/event.manager.factory";
import { DrinkDetailComponent } from "../drink-detail/drink.detail.component";

/**
 * Every one of the items of DringListComponent
 * @param {Object} props
 * @param {import("../../../models/drink.dto").DrinkDTO} props.data
 */
export const DrinkItemComponent = ({data}) => {

  /**@type {import("../../../models/drink.dto").DrinkDTO} */
  const detail = useDrinkDetail(data.idDrink);
  const ingredientList = detail ? [...Array(15).keys()]
    .map((value) => `strIngredient${value + 1}`)
    .filter(key => !!detail[key])
    .map(validKey => detail[validKey])
    .join(', ') : '';

  const eventService = EventManagerFactory.getEventManager("MODAL");

  return (
    getHtml()
  )

  function getHtml() {
    if(detail) {
      return (
      <div className="drink-item" onClick={drinkDetailPrompt}>
        <div>
          <img src={`${detail ? detail.strDrinkThumb : detail}/preview`} alt={detail.strDrink}></img>
        </div>
        <div className="drink-item__side">
          <div>
            <h3>{detail.strDrink}</h3>
          </div>
          <div className="drink-item__info">
            <p><strong>Alcoholic:</strong> {detail.strAlcoholic}</p>
            <p><strong>Ingredients:</strong> {ingredientList}</p>
            <p><strong>Category:</strong> {detail.strCategory}</p>
            <p><strong>Glass:</strong> {detail.strGlass}</p>
          </div>
        </div>
      </div>
      )
    } else {
      <div></div>
    }
  }

  function drinkDetailPrompt(event) {
    event.preventDefault(); 
    event.stopPropagation();
    eventService.emit({size: "md", title: detail.strDrink, component: <DrinkDetailComponent data={detail}></DrinkDetailComponent>})
  }
}