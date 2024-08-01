import React from "react";
import { menuItems } from "../../utils/menuItems";

import { ReactComponent as HomeIcon } from "../../assets/icons/HomeIcon.svg";
function Menu({ expandedMenu }) {
  return (
    <ul className="flex space-x-2 md:text-sm">
      <li>
        <a href="#" className="" aria-current="page">
          <HomeIcon />
        </a>
      </li>
      {menuItems.map((item) => (
        <li key={item.id}>
          <a
            href="#"
            className="text-white hover:text-blue-700 px-1 py-1  rounded"
          >
            {item.label}
          </a>
          {item.subItems && expandedMenu === item.id && (
            <ul className="absolute left-0 mt-2 bg-white text-gray-900 rounded shadow-lg">
              {item.subItems.map((subItem) => (
                <li key={subItem.id}>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    {subItem.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}

export default Menu;
