import { useDrinkDetail } from "../../services/effects/drink.detail.effect";

/**
 * Every one of the items of DringListComponent
 * @param {Object} props
 * @param {import("../../models/drink.dto").DrinkDTO} props.data
 * @returns 
 */
export const DrinkItemComponent = ({data}) => {
  // Get info from props
  // Display thumbnail (maybe component?)
  // Display name
  // Display info (Alcoholic, Ingredients, Category, Glass)
  /**@type {import("../../models/drink.dto").DrinkDTO} */
  const detail = useDrinkDetail(data.idDrink);
  const ingredientList = detail ? [...Array(15).keys()]
    .map((value) => `strIngredient${value + 1}`)
    .filter(key => !!detail[key])
    .map(validKey => detail[validKey])
    .join(', ') : '';

  return (
    getHtml()
  )

  function getHtml() {
    if(detail) {
      return <div style={{display: "flex"}}>
      <div>
        <img src={`${detail ? detail.strDrinkThumb : detail}/preview`} alt={detail.strDrink}></img>
      </div>
      <div>
        <div style={{marginLeft: "1rem"}}>
          <h3>{detail.strDrink}</h3>
        </div>
        <div style={{marginLeft: "1rem"}}>
          <p><strong>Alcoholic:</strong> {detail.strAlcoholic}</p>
          <p><strong>Ingredients:</strong> {ingredientList}</p>
          <p><strong>Category:</strong> {detail.strCategory}</p>
          <p><strong>Glass:</strong> {detail.strGlass}</p>
        </div>
      </div>
    </div>
    } else {
      <div></div>
    }
  }
}