import React from "react";
import { ReactComponent as SearchIcon } from "../../assets/icons/SearchIcon.svg";

function FindCare() {
  return (
    <div className="flex flex-col md:flex-row bg-secondary min-h-32 mx-auto p-8 justify-around items-center">
      <div className="w-full md:w-1/3">
        <h2 className="text-3xl font-semibold text-white pt-8 pb-4">
          Find Care
        </h2>
        <div className="flex">
          <input
            type="text"
            id="website-admin"
            className="rounded-lg rounded-r-none bg-gray-50 border text-gray-900 block flex-1 text-sm border-gray-300 p-2.5"
            placeholder="What are you looking for?"
          />
          <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-white border rounded-lg border-gray-300 rounded-l-none">
            <SearchIcon />
          </span>
        </div>
      </div>
      <div className="w-full md:w-1/3">
        <p className="text-white text-lg">Need help? We're here.</p>
      </div>
    </div>
  );
}

export default FindCare;
