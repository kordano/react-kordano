import React from "react"

export default React.createClass({
  delay: function(date) {
    const today = new Date();
    const diff = Math.floor((today - date) / 3600000);
    return diff;
  },
  render: function () {
    const date = React.DOM.small({className: "post-date"}, this.delay(this.props.date));
    const title = React.DOM.h3({className: "post-title"}, this.props.title);
    const abstract = React.DOM.p({className: "post-abstract"}, this.props.abstract);
    return React.DOM.li({className: "frontpost"}, title, date, abstract)
  }
});
