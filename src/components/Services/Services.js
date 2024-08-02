import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems, filterItems } from "../../redux/itemSlice";
import ItemList from "./ItemList";

function Services() {
  const dispatch = useDispatch();
  const filteredItems = useSelector((state) => state.items.filteredItems);
  const groupedItems = useSelector((state) => state.items.groupedItems);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const handleFilter = (letter) => {
    dispatch(filterItems(letter));
  };

  return (
    <div className="flex flex-col  bg-white py-4 items-center justify-center mx-auto">
      <div className="flex text-2xl text-gray-500 font-semibold justify-center w-full mb-4">
        Treatments, Services and Specialties
      </div>
      <div className="w-2/3 mb-4 mx-auto  font-semibold text-xl p-2 flex flex-wrap justify-between">
        {Object.entries(groupedItems).map(([key, value]) => (
          <button
            key={key}
            onClick={() => handleFilter(key)}
            className={`
              ${key === "#" ? "mr-0" : "mr-4"}
              ${value.length || key === "#" ? "text-blue-700" : "text-blue-200"}
            `}
          >
            {key}
          </button>
        ))}
      </div>
      <div className="w-full  bg-gray-100  ">
        <ItemList filteredItems={filteredItems} />
      </div>
    </div>
  );
}

export default Services;
