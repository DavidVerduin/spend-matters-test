import "./drink.detail.css";

/**
 * This component will appear in a modal when the element is selectedDringListComponent
 * @param {Object} props
 * @param {import("../../../models/drink.dto").DrinkDTO} props.data
 */
export const DrinkDetailComponent = ({data}) => {
  const ingredientList = data ? [...Array(15).keys()]
    .map((value) => `strIngredient${value + 1}`)
    .filter(key => !!data[key])
    .map(validKey => data[validKey])
    .join(', ') : '';
  return (
    <div className="drink-detail">
      <div className="drink-detail__img">
        <img src={`${data.strImageSource || data.strDrinkThumb}/preview`} alt={data.strDrink}></img>
      </div>
      <div className="drink-detail__items">
        <h3>Ingredients</h3>
        <p>{ingredientList}</p>
      </div>
      <div className="drink-detail__items">
        <h3>Instructions</h3>
        <p>{data.strInstructions}</p>
      </div>
    </div>
  )
}