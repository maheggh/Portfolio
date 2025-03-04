import { useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname, hash, key } = useLocation();
  const isFirstRender = useRef(true);

  useLayoutEffect(() => {
    // On the very first render, forcibly jump to top
    if (isFirstRender.current) {
      isFirstRender.current = false;
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      return;
    }

    // On subsequent route changes, if no hash, jump instantly
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }

  }, [pathname, hash, key]);

  return null;
}

export default ScrollToTop;
