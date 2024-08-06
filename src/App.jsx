import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route path="/" exact component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route path="/resume" component={Resume} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
};

export default App;
