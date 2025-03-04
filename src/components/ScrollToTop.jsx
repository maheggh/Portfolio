// ScrollToTop.jsx
import { useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash, key } = useLocation();
  const isFirstRender = useRef(true);

  useLayoutEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [pathname, hash, key]);

  return null;
}
