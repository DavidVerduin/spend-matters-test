import { useEffect, useState } from "react";
import { EventManagerFactory } from "../event.manager.factory";
import { FilterToServiceRelation } from "../filter.to.service.relation";

/** Returns an initial message, a mounted message or destroyed message depeding on the component life cycle state */
export const useFilters = () => {
  const [filters, setFilters] = useState({});
  useEffect(() => {
    // Do the things when componentDidMount use to act (can call Http request for example)
    const eventService = EventManagerFactory.getEventManager("CONSUME_FILTERS");
    eventService.subscribe("useFiltersEffect", eventData => {
      if(eventData && Object.keys(eventData) && Object.keys(eventData).length) {
        FilterToServiceRelation[Object.keys(eventData)[0]](eventData[Object.keys(eventData)[0]])
      .then(setFilters)
      }
    });

    // Return a function that will be executed when componentWillUnmount (usually remove event listeners)
    return () => {
      eventService.unsuscribe("useFiltersEffect");
    }
  }, [filters]);
  return filters;
}