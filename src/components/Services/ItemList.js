import React from "react";
import { ALPHABET } from "../../utils/constants";

function ItemList({ filteredItems = {} }) {
  return (
    <div className="w-2/3 mx-auto min-h-36 list-none bg-white text-gray-800 m-8 p-4 rounded shadow">
      {ALPHABET.map((char, groupIndex) => (
        <div key={`group-${groupIndex}`} className="mb-4">
          {filteredItems[char]?.length > 0 && (
            <>
              <h2 className="text-lg font-bold underline mb-4 mt-8">
                <span className="w-2/3" role="heading" aria-level="2">
                  {char}
                </span>
              </h2>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredItems[char]?.map((item, index) => (
                  <li key={`item-${index}`} className="break-words">
                    <a
                      href={item.link}
                      className="text-blue-500 hover:underline"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default ItemList;
