import "./App.css";
import React, { useState } from "react";
//import Detail from './pages/detail/Detail.js';
import Home from "./pages/home/Home.js";
import About from "./pages/about/About.js";
import Contact from "./pages/contact/Contact.js";
import Header from "./components/header/index.js";
import Footer from "./components/footer/index.js";
import MediaCard from "./pages/detail/Detail.js";
import SearchContext from "./context/SearchContext";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [city, setCity] = React.useState("");
  const [searchText, setSearchText] = useState("");
  return (
    <SearchContext.Provider
      value={{ city, setCity, searchText, setSearchText }}
    >
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} exact />
          <Route path="/contact" component={Contact} exact />
          <Route path="/detail/:id" component={MediaCard} exact />
        </Switch>
        <Footer />
      </Router>
    </SearchContext.Provider>
  );
}

export default App;
