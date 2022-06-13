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
    <div style={{width: "90%", padding:"1rem", maxHeight: "20rem", overflow: "hidden", border: "1px solid lightgrey", marginBottom: "1rem"}}>
      <h3>{label}</h3>
      <div style={{overflowY: "scroll"}}>
        {inputList}
      </div>
    </div>
  )
}