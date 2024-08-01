import React from "react";
import { menuItems } from "../../utils/menuItems";

import { ReactComponent as HomeIcon } from "../../assets/icons/HomeIcon.svg";

function Menu() {
  return (
    <ul className="flex space-x-2 md:text-sm items-center">
      <li>
        <button>
          <HomeIcon />
        </button>
      </li>
      {menuItems.map((item) => (
        <li key={item.id}>
          <button className="text-white hover:text-blue-700 px-1 py-1  rounded">
            {item.label}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Menu;
