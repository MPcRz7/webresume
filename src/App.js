import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./MainPages/HomePage.js";
import SkillPage from "./MainPages/SkillPage.js";
import ExperiencePage from "./MainPages/ExperiencePage.js";
import PortfolioPage from "./MainPages/PortfolioPage.js";
import AboutMePage from "./MainPages/AboutMePage.js";
import NotFoundPage from "./MainPages/NotFoundPage.js";
import "./App.css";



class App extends Component {
  constructor(props) {
    super(props);
  }

  renderRouter() {
    return (
      <Switch>
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/skill" exact={true} component={SkillPage} />
        <Route path="/experience" exact={true} component={ExperiencePage} />
        <Route path="/portfolio" exact={true} component={PortfolioPage} />
        <Route path="/aboutme" exact={true} component={AboutMePage} />

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
