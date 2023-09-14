import { useLayoutEffect, useState } from "react";

export const useDimensions = () => {
  const [dimensions, setDimensions] = useState({width: 0, height: 0})

  const updateDimensions = () => {
    setDimensions({width: window.innerWidth, height: window.innerHeight})
  };

  useLayoutEffect(() => {
    window.addEventListener("resize", updateDimensions);
    updateDimensions();
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return dimensions
};
