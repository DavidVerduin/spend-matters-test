import "./layout.css";

import { DrinkListComponent } from "../drinks/drink-list/drink.list.component"
import { FilterSidebarComponent } from "../filters/filter-sidebar/filter.sidebar.component"
import { FilterTopbarComponent } from "../filters/filter-topbar/filter.topbar.component"
import { HeaderComponent } from "../header/header.component"

/** Displays the app */
export const LayoutComponent = () => {
  return (
    <div className="layout">
      <div className="layout__header">
        <HeaderComponent></HeaderComponent>
      </div>
      <div className="layout__filter-topbar">
        <FilterTopbarComponent></FilterTopbarComponent>
      </div>
      <div className="layout__main-section">
        <div className="layout__main-section__filter-sidebar">
          <FilterSidebarComponent></FilterSidebarComponent>
        </div>
        <div className="layout__main-section__drink-list">
          <DrinkListComponent></DrinkListComponent>
        </div>
      </div>
    </div>
  )
}