import { SearchIcon } from "@/icons";
import React from "react";

const Search = () => {
  return (
    <div>
      <label className="input w-full border-black">
        <SearchIcon />
        <input className="" type="search" required placeholder="Search" />
      </label>
    </div>
  );
};

export default Search;
