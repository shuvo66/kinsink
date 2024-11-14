import { useEffect, useState } from "react";

export const useScrollHandler = () => {
  const [scroll, setScroll] = useState<boolean>(false);
  const scrollHandler = () => {
    const scrollY = window.scrollY;

    if (scrollY > 75) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  return { scroll };
};
