import React from "react/addons";

export default React.createClass({
  render: function() {
    const data = {href: this.props.link, className: "view-title"}
    return React.DOM.a(data, this.props.title);
  }
});
