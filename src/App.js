import './App.css';
//import Detail from './pages/detail/Detail.js';
import Home from './pages/home/Home.js';
import About from './pages/about/About.js';
import Contact from './pages/contact/Contact.js';
import Header from './components/header/index.js';
import Footer from './components/footer/index.js';
import MediaCard from './pages/detail/Detail.js';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {

  return (
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
  );
}

export default App;
