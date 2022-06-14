import { useEffect, useState } from "react"
import { EventManagerFactory } from "../event.manager.factory";

export const useModal = () => {
  const [visible, setVisible] = useState(null);

  useEffect(() => {
    const eventService = EventManagerFactory.getEventManager("MODAL");
    eventService.subscribe("useModal", data => {
      console.log('received', data);
      setVisible(data);
    });

    return () => {
      eventService.unsuscribe("useModal");
    }
  }, [visible]);

  return visible;
}