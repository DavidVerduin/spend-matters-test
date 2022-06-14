import "./filter.topbar.css";
import { useState } from "react";
import { EventManagerFactory } from "../../../services/event.manager.factory";

/**Displayed below header, has the filters of Alcoholic and Name */
export const FilterTopbarComponent = () => {
  const [alcoholic, setAlcoholic] = useState(false);
  const [name, setName] = useState('');

  const eventService = EventManagerFactory.getEventManager("CONSUME_FILTERS");

  const changeAlcoholic = (value) => {
    setAlcoholic(value);
    eventService.emit({alcoholic: value});
  }

  const changeName = (value) => {
    setName(value);
    eventService.emit({name: value});
  }

  return (
    <div className="filter-topbar">
      <div className="filter-topbar__elem filter-topbar__first">
        Alcoholic: <input className="checkbox" type="checkbox" value={alcoholic} onChange={event => changeAlcoholic(event.target.value)}></input>
      </div>
      <div>
        Name: <input type="text" value={name} onChange={event => changeName(event.target.value)}></input>
      </div>
    </div>
  )
}