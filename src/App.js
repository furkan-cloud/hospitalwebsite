import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Header from "./components/header/index";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Home />
        <Detail />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
