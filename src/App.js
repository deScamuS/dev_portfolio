/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./app.css";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  drawerClickHandler = () => {
    this.setState({ SideDrawerOpen: false });
  };

  render() {
    let backdrop;
    let drawer;
    if (this.state.sideDrawerOpen) {
      drawer = <SideDrawer click={this.drawerCLickHandler} />;
    }

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div style={{ height: "100%" }}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <main style={{ marginTop: "64px" }}>
          <p>This is the page content!</p>
        </main>
      </div>
    );
  }
}

export default App;
