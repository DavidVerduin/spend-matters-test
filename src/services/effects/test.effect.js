import { useEffect, useState } from "react";

/** Returns an initial message, a mounted message or destroyed message depeding on the component life cycle state */
export const useTest = () => {
  const [message, setMessage] = useState('Initial message');
  useEffect(() => {
    // Do the things when componentDidMount use to act (can call Http request for example)
    setMessage('Message mounted');

    // Return a function that will be executed when componentWillUnmount (usually remove event listeners)
    return () => {
      setMessage('Message destroyed');
    }
  }, [message]);
  return message;
}