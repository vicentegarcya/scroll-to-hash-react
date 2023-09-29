import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
  let location = useLocation();

  useEffect(() => {
    if (!!location.hash) {
      document?.getElementById(location.hash.slice(1)).scrollIntoView({
        behavior: "smooth",
        inline: "nearest",
      });
    }
  }, [location]);

  return null;
};

export default ScrollToHash;
