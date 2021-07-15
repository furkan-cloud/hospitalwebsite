import React, { useContext } from "react";
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import SearchContext from '../../context/SearchContext';


const cities = [
  {
    value: 'Alfeld',
    label: 'Alfeld'
  },
  {
    value: 'Braunschweig',
    label: 'Braunschweig'
  },
  {
    value: 'Burgwedel',
    label: 'Burgwedel'
  },
  {
    value: 'Coppenbrügge',
    label: 'Coppenbrügge'
  },
  {
    value: 'Göttingen',
    label: 'Göttingen'
  },
  {
    value: 'Hameln',
    label: 'Hameln'
  },
  {
    value: 'Hannover',
    label: 'Hannover'
  },
  {
    value: 'Hildesheim',
    label: 'Hildesheim'
  },
  {
    value: 'Lehrte',
    label: 'Lehrte'
  },
  {
    value: 'Rosdorf',
    label: 'Rosdorf'
  }
];

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  buttons: {
    width: '200px',
    height: '57px',
    marginRight : '10px'
  },
  searchbutton: {
    width: '200px',
    height: '57px',
    marginRight : '10px',
    backgroundColor: '#5CC6C9',
    '&:hover': {
      backgroundColor: 'green',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
  },
  sortbutton: {
    width: '105px',
    height: '57px',
    marginRight : '10px',
    backgroundColor: 'lightgoldenrodyellow',
    borderColor: '#0062cc',
  },
}));

  const Search = (props) => {
  
  const classes = useStyles();
  const {city, setCity, searchText, setSearchText} = useContext(SearchContext);

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <div>
      <TextField className={classes.buttons} id="outlined-basic" label="Clinic name" variant="outlined" onChange={(event) => setSearchText(event.target.value)} />

      <TextField
        id="outlined-select-currency"
        select
        label="Select city"
        value={city}
        onChange={handleChange}
        variant="outlined"
        className={classes.buttons}
      >
        {cities.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <Button className={classes.searchbutton} variant="outlined" type="submit" id="btn-suche" onClick={() => props.searchedText(searchText)}>Search</Button>

      <button className={classes.sortbutton} id="btn-sort" onClick={()=>props.sorted()}>Sort by Rating</button>
    </div>

  );

};

export default Search;
