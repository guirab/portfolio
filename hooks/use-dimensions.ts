import { useLayoutEffect, useState } from "react";

export const useDimensions = () => {
  const [dimensions, setDimensions] = useState({width: 0, height: 0})

  const updateDimensions = () => {
    if(typeof window === "undefined") return;
    setDimensions({width: window.innerWidth, height: window.innerHeight})
  };

  useLayoutEffect(() => {
    if(typeof window === "undefined") return;
    window.addEventListener("resize", updateDimensions);
    updateDimensions();
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  if(dimensions.width === 0 || dimensions.height === 0) {
    updateDimensions();
    return dimensions
  }
  return dimensions;
};
