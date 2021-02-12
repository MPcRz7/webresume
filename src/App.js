import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./MainPages/HomePage.js";
import SkillPage from "./MainPages/SkillPage.js";
import ExperiencePage from "./MainPages/ExperiencePage.js";
import PortfolioPage from "./MainPages/PortfolioPage.js";
import AboutMePage from "./MainPages/AboutMePage.js";
import NotFoundPage from "./MainPages/NotFoundPage.js";
//import "./App.css";
import "./Styles/style.scss";

import WindowSize from "./Handler/WindowSize.js";

class App extends Component {
  constructor(props) {
    super(props);
  }

  renderRouter() {
    return (
      <Switch>
        <Route path="/webresume/" exact={true} component={HomePage} />
        <Route path="/webresume/skill" exact={true} component={SkillPage} />
        <Route path="/webresume/experience" exact={true} component={ExperiencePage} />
        <Route path="/webresume/portfolio" exact={true} component={PortfolioPage} />
        <Route path="/webresume/aboutme" exact={true} component={AboutMePage} />

        <Route component={NotFoundPage} />
      </Switch>
    )

  }

  render() {
    return (
      <BrowserRouter>
        {this.renderRouter()}
      </BrowserRouter>
      
    );
  }
}

export default App;
