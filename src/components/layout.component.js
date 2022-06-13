import { DrinkListComponent } from "./drinks/drink.list.component"
import { FilterSidebarComponent } from "./filters/filter.sidebar.component"
import { FilterTopbarComponent } from "./filters/filter.topbar.component"
import { HeaderComponent } from "./header.component"

/** Displays the app */
export const LayoutComponent = () => {
  return (
    <div>
      <div style={{height: "10%", width: "100%", padding: "0.5 rem", borderBottom: "1px solid grey"}}>
        <HeaderComponent></HeaderComponent>
      </div>
      <div style={{height: "10%", width: "100%", padding: "0.5 rem", borderBottom: "1px solid grey", marginBottom: "1rem"}}>
        <FilterTopbarComponent></FilterTopbarComponent>
      </div>
      <div style={{display: "flex"}}>
        <div style={{width: "20%", height: "85%", marginLeft: "2rem"}}>
          <FilterSidebarComponent></FilterSidebarComponent>
        </div>
        <div  style={{width: "70%", height: "85%", marginLeft: "2rem", marginTop: "25px"}}>
          <DrinkListComponent></DrinkListComponent>
        </div>
      </div>
    </div>
  )
}