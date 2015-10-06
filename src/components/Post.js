import React from "react/addons";

export default React.createClass({
  mixins: [React.addons.PureRenderMixin],
  delay: function(date) {
    const today = new Date();
    const diff = Math.floor((today - date) / (3600000 * 24));
    return diff;
  },
  render: function () {
    const date = React.DOM.small({className: "post-date"}, this.delay(this.props.date));
    const title = React.DOM.h3({className: "post-title"}, this.props.title);
    const abstract = React.DOM.p({className: "post-abstract"}, this.props.abstract);
    return React.DOM.li({className: "post"}, title, date, abstract)
  }
});
