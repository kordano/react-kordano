import "./global.scss";
import React from "react";
import Router, {Route, DefaultRoute} from "react-router";
import {createStore} from "redux";
import {Provider} from "react-redux";
import reducer from "./reducer";
import App from "./components/App";
import {fromJS} from "immutable";
import {FrontpageContainer} from "./components/Frontpage";
import {AboutContainer} from "./components/About";

const contentContainer = document.getElementById("content-container");
const defaultRoute = React.createElement(DefaultRoute, {handler: FrontpageContainer});
const aboutRoute = React.createElement(Route, {handler: AboutContainer, path: "about"});
const routes = React.createElement(Route, {handler: App}, aboutRoute, defaultRoute);
const store = createStore(reducer);

export function loadJSON(path, callback) {
  let xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open("GET", path, true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      callback(xobj.responseText);
    }
  };
  xobj.send(null);
}

loadJSON("proto.json", data => {
  const jsonData = JSON.parse(data);
  
  store.dispatch({
    type: "SET_STATE",
    state: fromJS(jsonData)
  });
  
  Router.run(routes, (Root) => {
    const provider = React.createElement(Provider, {store: store}, () => React.createElement(Root));
    React.render(provider, contentContainer);
  });

});
