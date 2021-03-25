import React, { useState } from "react";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  console.log(searchText);
  return (
    <div>
      <input
        id="search"
        name="search"
        type="text"
        placeholder="Klinikname"
        onChange={(event) => {
          setSearchText(event.target.value);
        }}
      />
      <button type="submit" id="btn-suche" onClick={null}>
        Suche
      </button>
      <button type="submit" id="btn-show-all" onClick={null}>
        See All
      </button>
      <button type="submit" id="btn-sort" onClick={null}>
        Sort
      </button>
    </div>
  );
};

export default Search;
