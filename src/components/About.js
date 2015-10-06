import React from "react";

export default React.createClass({
  render: function() {
    const title = React.DOM.h1({className: "about-title"}, this.props.about.title);
    const content = React.DOM.p({className: "about-content"}, this.props.about.content);
    return React.DOM.div(null, title, content);
  }
});
