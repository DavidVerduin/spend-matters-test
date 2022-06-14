import "./filter.topbar.css";
import { useState } from "react";
import { EventManagerFactory } from "../../../services/event.manager.factory";

/**Displayed below header, has the filters of Alcoholic and Name */
export const FilterTopbarComponent = () => {
  const [alcoholic, setAlcoholic] = useState(false);
  const [name, setName] = useState('');

  const eventService = EventManagerFactory.getEventManager("CONSUME_FILTERS");

  /**
   * Sets the new state for the model and fires the event so the drink-list can have the data updated
   * @param {boolean} value The new value for alcoholic
   */
  const changeAlcoholic = () => {
    setAlcoholic(!alcoholic);
    eventService.emit({alcoholic: !alcoholic});
  }

  /**
   * Sets the new state for the model and fires the event so the drink-list can have the data updated
   * @param {string} value The new value for name
   */
  const changeName = (value) => {
    setName(value);
    eventService.emit({name: value});
  }

  return (
    <div className="filter-topbar">
      <div className="filter-topbar__elem filter-topbar__first">
        Alcoholic: <input className="checkbox" type="checkbox" value={alcoholic} onChange={changeAlcoholic}></input>
      </div>
      <div className="filter-topbar__elem">
        Name: <input type="text" value={name} onChange={event => changeName(event.target.value)}></input>
      </div>
    </div>
  )
}