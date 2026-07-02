import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import cafeLogo from "/logo.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY >= 100);
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  return (
   <header
  className={`fixed top-0 left-0 right-0 z-20 flex h-20 items-center justify-center transition-all duration-300  lg:justify-between lg:px-10 ${
    isScrolled
      ? "bg-white shadow-md text-black"
      : "bg-transparent text-white md:h-40"
  }`}
>
      <div className="hidden translate-x-[30px] font-bold font-montserrat text-[14px] lg:block lg:flex lg:gap-4  uppercase">
        <span>Home</span>
        <span>Pages</span>
        <span>Portfolio</span>
        <span>News</span>
      </div>
      <img
        src={cafeLogo}
        alt="cafe hero"
        className="h-10 w-10 object-contain"
      />
      <div className="hidden translate-x-[-30px] font-bold font-montserrat text-[14px] lg:block lg:flex lg:gap-4 uppercase">
        <span>Elements</span>
        <span>Shop</span>
        <span>
          <FontAwesomeIcon icon={faShoppingCart} />
        </span>
        <span>
          <i className="fa fa-globe fa-lg"></i>
          English
        </span>
      </div>

      <button className="absolute right-5 flex flex-col gap-1 justify-center lg:hidden">
        <span className="sr-only">Toggle navigation</span>

        <span className="block h-0.5 w-6 bg-black"></span>
        <span className="block h-0.5 w-6 bg-black"></span>
        <span className="block h-0.5 w-6 bg-black"></span>
      </button>
    </header>
  );
}
