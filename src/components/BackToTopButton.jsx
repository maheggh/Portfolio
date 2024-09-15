import React, { useState, useEffect } from "react";
import { ChevronUpIcon } from "@heroicons/react/solid"; // You can use any icon library or custom icon

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 z-50 p-2 rounded-full bg-blue-600 dark:bg-blue-500 text-white dark:text-gray-100 shadow-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-opacity duration-300"
          aria-label="Back to top"
        >
          <ChevronUpIcon className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
