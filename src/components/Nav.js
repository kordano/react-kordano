import React from "react/addons";
import Navlink from "./Navlink";

export default React.createClass({
  createNavlink: function(view) {
    return React.createElement(Navlink, view);
  },
  render: function() {
    const navlinks = this.props.views.map(this.createNavlink);
    return React.DOM.nav({className: "navbar"}, navlinks);
  }
});
