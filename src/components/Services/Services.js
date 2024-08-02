import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems, filterItems } from "../../redux/itemSlice";
import { ALPHABET } from "../../utils/constants";
import ItemList from "./ItemList";

function Services() {
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
      <div className="flex text-2xl  font-semibold justify-center w-full mb-4">
        Treatments, Services and Specialties
      </div>
      <div className="w-2/3 mb-4 mx-auto p-2 flex flex-wrap justify-between">
        {ALPHABET.map((letter, index) => (
          <button
            key={index}
            onClick={() => handleFilter(letter)}
            className={index === 26 ? "mr-0" : "mr-4"}
          >
            {letter}
          </button>
        ))}
      </div>
      <div className="w-full  bg-gray-100  ">
        <ItemList items={items} />
      </div>
    </div>
  );
}

export default Services;
