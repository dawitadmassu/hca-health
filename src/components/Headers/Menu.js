import React from "react";
import { menuItems } from "../../utils/menuItems";

function Menu() {
  return (
    <ul className="flex space-x-2 md:text-sm items-center">
      <li>
        <i className="fa-solid fa-house mr-2 text-white"></i>
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
