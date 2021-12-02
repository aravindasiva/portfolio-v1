import { useState, useEffect, useRef } from "react";
import throttle from "lodash/throttle";

export default function useScrollDirection() {
  const scrollPos = useRef(0);
  const [direction, setDirection] = useState({
    isDown: false,
    isUp: false,
    isTop: true
  });

  useEffect(() => {
    const handleScroll = throttle(() => {
      setDirection({
        isDown: window.pageYOffset > scrollPos.current,
        isUp: window.pageYOffset < scrollPos.current,
        isTop: window.pageYOffset < 200
      });
      scrollPos.current = window.pageYOffset;
    }, 200);

    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return direction;
}
