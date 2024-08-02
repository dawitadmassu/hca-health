import React from "react";
import { menuItems } from "../../utils/menuItems";

function ExpandedMenu() {
  return (
    <div className="md:hidden" id="navbar-dropdown">
      <ul className="flex flex-col space-y-2 p-2 mt-4 text-sm">
        <li>
          <button
            className="block text-white hover:text-secondary px-2 py-1 rounded w-full"
            aria-current="page"
          >
            <div className="flex flex-row justify-center">
              <i className="fa-solid fa-house mr-2"></i>
              <span>Home</span>
            </div>
          </button>
        </li>
        {menuItems.map((item) => (
          <li key={item.id}>
            <button
              className="block text-white hover:text-secondary px-2 py-1 rounded w-full"
              role="menuitem"
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpandedMenu;
