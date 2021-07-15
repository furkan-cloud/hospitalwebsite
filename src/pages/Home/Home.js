import Search from "../../components/search/index.js";
import RecipeReviewCard from "../../components/card/index.js";
import React, { useState, useEffect, useContext } from "react";
import "./style.css";
import { db } from "../../firebase/firebase.js";
import SearchContext from '../../context/SearchContext';

const Home = (props) => {
  const {city, searchText} = useContext(SearchContext);
  const [kliniklist, setKlinikList] = useState([]);
  const [kliniklist2, setKlinikList2] = useState([]);

  const fetchData = ()=>{
      db.collection("clinicliste").get().then(res => {
          let formattedData = res.docs.map(data => data.data());
          setKlinikList2(formattedData)
          setKlinikList(formattedData)
      })
  }

  const filterKliniks = (e) => {
    console.log("searched: " + e);

    const filteredKliniks = kliniklist2.filter((item) => {
      const searchedCityUpper = city?.toUpperCase();
      const searchedKlinikUpper = searchText?.toUpperCase();
      const kliniksCity = item.city.toUpperCase();
      const kliniksName = item.name.toUpperCase();
      return kliniksName.indexOf(searchedKlinikUpper) > -1 && kliniksCity.indexOf(searchedCityUpper) > -1;
    });
    setKlinikList(filteredKliniks);
  };

  const sortData = () => {
    const copiedList = [...kliniklist];
    let sortedData = copiedList.sort((a,b) => b.rating_klinify-a.rating_klinify );
    console.log(sortedData);
    setKlinikList(sortedData);
}

useEffect(() => {
  fetchData()
}, [])

useEffect(() => {
    filterKliniks()
}, [city])

  return (
    <div id="homepage">
      <div id="searcharea">
        <h2>FIND BEST CLINIC AROUND</h2>
        <Search searchedText={filterKliniks} sorted={sortData} />
      </div>

      <div id="cards">
        {kliniklist?.map((k) => (
          <RecipeReviewCard
            key={k.id}
            data={k}
            id={k.id}
            name={k.name}
            address={k.address}
            rating={k.rating_klinify}
            image={k.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

