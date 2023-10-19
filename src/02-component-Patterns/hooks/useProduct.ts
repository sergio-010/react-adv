import { useState } from "react";

export const useProduct = () => {
  const [counter, setCounter] = useState(0);
  const increaseBy = (value: number) => {
    if (counter + value < 0) {
      return;
    }
    setCounter((c) => c + value);
  };
  return {
    counter,
    increaseBy,
  };
};
