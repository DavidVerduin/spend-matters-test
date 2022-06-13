import { useEffect, useState } from "react";
import { TestHttpService } from "../http/test.http.service";

/** Returns an initial message, a mounted message or destroyed message depeding on the component life cycle state */
export const useTestHttpEffect = () => {
  const [message, setMessage] = useState('Loading ...');
  useEffect(() => {

    TestHttpService.getFact()
      .then(response => response.json())
      .then(data => setMessage(data.chartName + ': ' + data.bpi.EUR.rate))
      .catch(error => setMessage('Error loading: ' + error));

    // Return a function that will be executed when componentWillUnmount (usually remove event listeners)
    return () => {
      setMessage('Message destroyed');
    }
  }, []);
  return message;
}