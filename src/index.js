import React from "react";
import Router, {Route, DefaultRoute} from "react-router";
import App from "./components/App";
import Frontpage from "./components/Frontpage";
import About from "./components/About"

const contentContainer = document.getElementById("content-container");
const defaultRoute = React.createElement(DefaultRoute, {handler: Frontpage});
const aboutRoute = React.createElement(Route, {handler: About, path: "about"});
const routes = React.createElement(Route, {handler: App}, aboutRoute, defaultRoute);

Router.run(routes, (Root) => {
  React.render(React.createElement(Root), contentContainer)
})  
