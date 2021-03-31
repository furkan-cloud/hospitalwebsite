import Search from "../../components/search/index.js";
import RecipeReviewCard from "../../components/card/index.js";
import React, { useState } from "react";
import "./style.css";

const kliniks = [
  {
    id: "1",
    name: "hospitalname1",
    address: "hospital address1",
    rating: 5,
    ratingNumber: "111",
  },
  {
    id: "2",
    name: "hospitalname2",
    address: "hospital address2",
    rating: 4,
    ratingNumber: "111",
  },
  {
    id: "3",
    name: "hospitalname3",
    address: "hospital address3",
    rating: 4.3,
    ratingNumber: "111",
  },
  {
    id: "4",
    name: "hospitalname4",
    address: "hospital address4",
    rating: 3.5,
    ratingNumber: "111",
  },
  {
    id: "5",
    name: "hospitalname5",
    address: "hospital address5",
    rating: 5,
    ratingNumber: "111",
  },
  {
    id: "6",
    name: "hospitalname6",
    address: "hospital address6",
    rating: 1,
    ratingNumber: "111",
  },
  {
    id: "7",
    name: "hospitalname7",
    address: "hospital address7",
    rating: 1.3,
    ratingNumber: "1111",
  },
  {
    id: "8",
    name: "hospitalname8",
    address: "hospital address8",
    rating: 4.9,
    ratingNumber: "11",
  },
];

const Home = (props) => {
  const copyKliniklist = [...kliniks];
  const [kliniklist, setKlinikList] = useState([...kliniks]);

  const filterKliniks = (e) => {
    console.log("searched: " + e);
    const filteredKliniks = copyKliniklist.filter((item) => {
      const searchedKlinikUpper = e?.toUpperCase();
      const kliniksName = item.name.toUpperCase();
      return kliniksName.indexOf(searchedKlinikUpper) > -1;
    });
    console.log("filterd", filteredKliniks);
    setKlinikList(filteredKliniks);
  };
  return (
    <div className="homepage">
      <div className="searchWrapper">
        <p>Homepage</p>
        <Search searchedText={filterKliniks} />
      </div>
      <div className="klinikCardsWrapper">
        {kliniklist?.map((k) => (
          <RecipeReviewCard
            id={k.id}
            name={k.name}
            address={k.address}
            rating={k.rating}
            ratingNumber={k.ratingNumber}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
