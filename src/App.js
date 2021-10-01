import React from "react";
import './App.css';
import PortfolioContainer from './components/PortfolioContainer';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import Resume from "./components/pages/Resume";
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </Router>
    
    </div>
  );
}

export default App;
