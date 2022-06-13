import { useTestHttpEffect } from "../services/effects/http.effect";
import { useTest } from "../services/effects/test.effect";

export const HomeComponent = () => {
  const message = useTestHttpEffect();
  const message2 = useTest();
  return (
    <div>
      {message} 
      {message2}
    </div>
  )
}