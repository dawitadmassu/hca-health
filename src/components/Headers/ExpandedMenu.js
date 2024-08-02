import React from "react";
import { menuItems } from "../../utils/menuItems";
import { ReactComponent as HomeIcon } from "../../assets/icons/HomeIcon.svg";

function ExpandedMenu() {
  return (
    <div className="md:hidden " id="navbar-dropdown">
      <ul className="flex flex-col space-y-2 p-2 mt-4 text-sm">
        <li>
          <button
            className="block text-white hover:text-secondary px-2 py-1 rounded w-full"
            aria-current="page"
          >
            <div className="flex flex-row justify-center">
              <HomeIcon className="size-5" />
              Home
            </div>
          </button>
        </li>
        {menuItems.map((item) => (
          <li key={item.id}>
            <button className="block text-white hover:text-secondary px-2 py-1 rounded w-full">
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpandedMenu;
