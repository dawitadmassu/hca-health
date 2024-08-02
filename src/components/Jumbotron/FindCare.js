import React from "react";

function FindCare() {
  return (
    <section className="py-8  bg-secondary min-h-32  ">
      <div className="w-2/3 mx-auto flex flex-col md:flex-row justify-around items-center ">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-semibold text-white pt-8 pb-4">
            Find Care
          </h2>
          <div className="flex">
            <label htmlFor="search-input" className="sr-only">
              Search
            </label>
            <input
              type="text"
              id="search-input"
              className="rounded-lg rounded-r-none bg-gray-50 border text-gray-900 block flex-1 text-sm border-gray-300 p-2.5"
              placeholder="What are you looking for?"
              aria-label="Search"
            />
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-white border rounded-lg border-gray-300 rounded-l-none">
              <i className="fa-solid fa-magnifying-glass text-2xl"></i>
            </span>
          </div>
        </div>
        <div className="w-full md:w-1/2 pl-16">
          <p className="text-white text-lg">Need help? We're here.</p>
        </div>
      </div>
    </section>
  );
}

export default FindCare;
