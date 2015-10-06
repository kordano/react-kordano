import React from "react";
import Frontpost from "./Frontpost";

export default React.createClass({
  createPost: function(post) {
    React.createElement(Frontpost, post)
  },
  render: function() {
    const posts = this.props.posts.map(createPost)
    return React.DOM.ul({className: "frontposts"}, posts);
  }

});
