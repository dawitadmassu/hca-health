import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import SearchInput from "./SearchInput";
import Menu from "./Menu";
import ExpandedMenu from "./ExpandedMenu";

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);
  const toggleSearch = () => setSearchOpen(!isSearchOpen);

  return (
    <nav className="bg-primary border-gray-200  p-2">
      <div className="flex flex-wrap items-center justify-between mx-auto ">
        <img src={logo} className="h-5" alt="Logo" />

        <div className="hidden md:flex md:mt-2 items-center space-x-4">
          <Menu />
          <SearchInput />
        </div>

        <div className="flex md:hidden space-x-2">
          <button
            onClick={toggleSearch}
            className="inline-flex items-center p-2 w-8 h-8 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <span className="sr-only">Toggle search</span>
            <i class="fa-solid fa-magnifying-glass text-2xl"></i>
          </button>
          <button
            onClick={toggleMenu}
            className="inline-flex items-center p-2 w-8 h-8 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <span className="sr-only">Toggle menu</span>
            <i class="fa-solid fa-bars text-2xl"></i>
          </button>
        </div>
      </div>

      {isSearchOpen && (
        <div className="md:hidden">
          <SearchInput />
        </div>
      )}

      {isMenuOpen && <ExpandedMenu />}
    </nav>
  );
}

export default Header;
