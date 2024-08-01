import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems, filterItems } from "../redux/itemSlice";

function ItemList() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.filteredItems);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const handleFilter = (letter) => {
    dispatch(filterItems(letter));
  };

  return (
    <div className="flex flex-col  bg-white py-4 items-center justify-center mx-auto">
      <div className="flex text-2xl font-semibold justify-center w-full mb-4">
        Treatments, Services and Specialties
      </div>
      <div className="w-2/3 mb-4 mx-auto p-2 flex flex-wrap justify-between">
        {"ABCDEFGHIJKLMNOPQRSTUVWXYZ#".split("").map((letter, index) => (
          <button
            key={index}
            onClick={() => handleFilter(letter)}
            className="mr-4"
          >
            {letter}
          </button>
        ))}
      </div>
      <div className="w-full  bg-gray-100  ">
        <ul className="w-2/3  mx-auto min-h-36 list-none  bg-white text-gray-800  m-8 p-4 rounded shadow">
          {items ? (
            Array.isArray(items) &&
            items.map((item, index) => (
              <li key={index}>
                <a href={item.link}>{item.title}</a>
              </li>
            ))
          ) : (
            <div className="w-2/3  mx-auto min-h-36">
              {" "}
              No Treatments, Services and Specialties Found{" "}
            </div>
          )}
        </ul>
      </div>
    </div>
  );
}

export default ItemList;
