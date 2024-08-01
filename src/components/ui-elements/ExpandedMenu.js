import React from "react";
import { menuItems } from "../../utils/menuItems";
import { ReactComponent as HomeIcon } from "../../assets/icons/HomeIcon.svg";

function ExpandedMenu() {
  return (
    <div className="md:hidden " id="navbar-dropdown">
      <ul className="flex flex-col space-y-2 p-2 mt-4 text-sm">
        <li>
          <a
            href="#"
            className="block text-white hover:text-secondary px-2 py-1 rounded"
            aria-current="page"
          >
            <div className="flex flex-row justify-center">
              <HomeIcon />
              Home
            </div>
          </a>
        </li>
        {menuItems.map((item) => (
          <li key={item.id}>
            <a
              href="#"
              className="block text-white hover:text-secondary px-2 py-1 rounded"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpandedMenu;
