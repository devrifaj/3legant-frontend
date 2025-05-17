import { SearchIcon } from "@/icons";
import React from "react";

const Search = () => {
  return (
    <div>
      <label className="input border-black w-full">
        <SearchIcon />
        <input className="" type="search" required placeholder="Search" />
      </label>
    </div>
  );
};

export default Search;
