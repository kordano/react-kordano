import React from "react";
import Nav from "./Nav";

export default React.createClass({
  render: function() {
    const title = React.DOM.h1({className: "about-title"}, this.props.about.title);
    const content = React.DOM.p({className: "about-content"}, this.props.about.content);
    const nav = React.createElement(Nav, {views: this.props.views});
    const page = React.DOM.div({className: "about-page"}, title, content);
    return React.DOM.div(null, nav, page);
    
  }
});
