import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Container from "./components/Container";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header></Header>
      <Hero></Hero>
      <Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/resume" component={Resume} />
          </Switch>
      </Container>
      <Footer></Footer>
    </Router>
  );
}

export default App;
