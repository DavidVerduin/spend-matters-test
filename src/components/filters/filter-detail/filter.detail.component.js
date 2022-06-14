import "./filter.detail.css";

/** The detail of the filters (Ingredient, Category, Glass...) */
export const FilterDetailComponent = ({selected, options, selectItem, label}) => {
  const inputList = options && options.length ? options.map(elem => {
    return <div key={elem}>
      <button className="filter-button" style={elem === selected ? {color: "rgb(227,120,75)"} : {}} onClick={() => {
        selectItem(elem);
      }}>{elem}</button>
    </div>
  }) : 'No filters';

  return (
    <div className="filter-detail">
      <h3>{label}</h3>
      <div className="filter-detail__list">
        {inputList}
      </div>
    </div>
  )
}