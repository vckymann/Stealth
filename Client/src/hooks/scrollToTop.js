import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTopOnPageChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the window
  }, [pathname]); // Scrolls whenever the pathname changes

  return null; // Since this is a utility component, it doesn't render anything
}

export default ScrollToTopOnPageChange;
