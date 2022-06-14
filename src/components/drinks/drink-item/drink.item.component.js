import "./drink.item.css";
import { EventManagerFactory } from "../../../services/event.manager.factory";
import { DrinkDetailComponent } from "../drink-detail/drink.detail.component";

/**
 * Every one of the items of DringListComponent
 * @param {Object} props
 * @param {import("../../../models/drink.dto").DrinkDTO} props.data
 */
export const DrinkItemComponent = ({data}) => {

  const ingredientList = data ? [...Array(15).keys()]
    .map((value) => `strIngredient${value + 1}`)
    .filter(key => !!data[key])
    .map(validKey => data[validKey])
    .join(', ') : '';

  const eventService = EventManagerFactory.getEventManager("MODAL");

  return (
    getHtml()
  )

  function getHtml() {
    if(data) {
      return (
      <div className="drink-item" onClick={drinkDetailPrompt}>
        <div>
          <img src={`${data ? data.strDrinkThumb : data}/preview`} alt={data.strDrink}></img>
        </div>
        <div className="drink-item__side">
          <div>
            <h3>{data.strDrink}</h3>
          </div>
          <div className="drink-item__info">
            <p><strong>Alcoholic:</strong> {data.strAlcoholic}</p>
            <p><strong>Ingredients:</strong> {ingredientList}</p>
            <p><strong>Category:</strong> {data.strCategory}</p>
            <p><strong>Glass:</strong> {data.strGlass}</p>
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
    eventService.emit({size: "md", title: data.strDrink, component: <DrinkDetailComponent data={data}></DrinkDetailComponent>})
  }
}