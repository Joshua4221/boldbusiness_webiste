import React from "react";
import { IMAGES } from "../../../constant/Images";

const SearchRolesSection = () => {
  return (
    <div>
      <div className="container flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-4 md:p-6 w-full max-w-4xl mx-auto gap-4 md:gap-6">
        <div>
          <p>Search Roles</p>
          <div>
            <p>Search Roles</p>
          </div>
        </div>
        <div>
          <p>Location</p>
          <div className="flex">
            <div className="flex">
              <img src={IMAGES.locationMarker} />
              <p>All</p>
            </div>
            <img />
          </div>
        </div>
        <div>
          <p>Descipline</p>
          <div className="flex">
            <p>All</p>
            <img />
          </div>
        </div>
        <button>Search</button>
      </div>
    </div>
  );
};

export default SearchRolesSection;
