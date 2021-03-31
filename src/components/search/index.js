import React, { useState } from "react";
import { TextField, Button, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const cities = [
  {
    value: "Berlin",
    label: "Berlin",
  },
  {
    value: "Hannover",
    label: "Hannover",
  },
  {
    value: "Gottingen",
    label: "Gottingen",
  },
];

const useStyles = makeStyles((theme) => ({
  input: {
    width: "150px",
    height: "56px",
    marginRight: "10px",
  },
}));

const Search = (props) => {
  const classes = useStyles();
  const [searchText, setSearchText] = useState("");
  const [city, setCity] = React.useState();
  console.log("ss", searchText);

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <div>
      <TextField
        onChange={(event) => {
          setSearchText(event.target.value);
        }}
        id="outlined-basic"
        label="Klinikname"
        variant="outlined"
        type="text"
        className={classes.input}
      />
      <TextField
        id="outlined-select-currency"
        select
        label="Select City"
        value={city}
        onChange={handleChange}
        variant="outlined"
        className={classes.input}
      >
        {cities.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Button
        type="submit"
        id="btn-suche"
        variant="outlined"
        className={classes.input}
        onClick={() => props.searchedText(searchText)}
      >
        Search
      </Button>

      <Button
        className={classes.input}
        type="submit"
        id="btn-sort"
        variant="outlined"
        onClick={null}
      >
        Sort
      </Button>
    </div>
  );
};

export default Search;

{
  /* <input
        id="search"
        name="search"
        type="text"
        placeholder="Klinikname"
        onChange={(event) => {
          setSearchText(event.target.value);
        }}
      /> */
}

{
  /* <button type="submit" id="btn-show-all" onClick={null}>
        See All
      </button>
      <button type="submit" id="btn-sort" onClick={null}>
        Sort
      </button> */
}

{
  /* <button
        type="submit"
        id="btn-suche"
        onClick={() => props.searchedText(searchText)}
      >
        Suche
      </button> */
}

{
  /* <Button type="submit" id="btn-show-all" variant="outlined" onClick={null}>
        See All
      </Button> */
}
