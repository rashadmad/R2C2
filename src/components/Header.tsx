import React from "react";
import { useLocation } from "@reach/router";
import { useState } from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Brand from "../components/Brand";
import Navigation from "../components/Navigation";
import MobileMenu from "../components/MobileMenu";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  console.log(location.pathname);
  return (
    <header className="bg-white inset-x-0 sticky top-0 z-50">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Brand />
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-sky-400"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
          </button>
        </div>
        {location.pathname !== "/initiatives" && location.pathname !== "/about" && location.pathname !== "/resources" && (
          <Navigation name="home" href="/" />
        )}
      </nav>
      {mobileMenuOpen && (
        <MobileMenu mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      )}
    </header>
  );
};

export default Header;