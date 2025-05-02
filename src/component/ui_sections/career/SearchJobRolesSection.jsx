import React from "react";

const SearchSection = () => {
  return (
    <div className="py-6">
      <div className="container flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-4 md:p-6 w-full max-w-4xl mx-auto gap-4 md:gap-6">
        {/* Search Roles Input */}
        <div className="flex flex-col w-full md:w-1/3">
          <label className="text-[#] text-sm font-semibold mb-1">
            Search Roles
          </label>
          <input
            type="text"
            placeholder="Search Roles"
            className="border border-gray-300 bg-[#E0E0E0] rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        {/* Location Dropdown */}
        <div className="flex flex-col w-full md:w-1/4">
          <label className="text-gray-700 text-sm font-semibold mb-1">
            Location
          </label>
          <div className="relative">
            <select className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-gray-400 appearance-none">
              <option>All</option>
              <option>New York</option>
              <option>London</option>
              <option>Tokyo</option>
            </select>
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></span>
          </div>
        </div>

        {/* Discipline Dropdown */}
        <div className="flex flex-col w-full md:w-1/4">
          <label className="text-gray-700 text-sm font-semibold mb-1">
            Discipline
          </label>
          <select className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-gray-400 appearance-none">
            <option>All</option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Finance</option>
          </select>
        </div>

        {/* Search Button */}
        <div className="w-full md:w-auto flex items-end pt-5">
          <button className="bg-black text-white px-6 py-2 rounded-md w-full md:w-auto hover:bg-gray-800 transition">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
