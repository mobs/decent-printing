import React, { useState, useEffect } from "react";
import { whatsapp } from "../constants/Images";

const Icon = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <button
        onClick={scrollToTop}
        className={`fixed bottom-24 right-4 z-50 bg-red-500 text-white py-2 px-4 rounded-full ${
          showButton ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300 hover:bg-blue-600`}
      >
        Scroll to Top
      </button>

      <div className="group inline-block fixed bottom-8 right-8 z-50">
        <a
          href="https://wa.me/971505262390"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="h-14 w-14 rounded-[10px]" src={whatsapp} />
        </a>
        <div className="bottom-2 text-xs w-32 right-16 hidden group-hover:block bg-green-500 text-white absolute py-2 px-4 rounded-md">
          WhatsApp us
        </div>
      </div>
    </div>
  );
};

export default Icon;
