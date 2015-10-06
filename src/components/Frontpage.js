import React from "react/addons";
import Post from "./Post";

export default React.createClass({
  mixins: [React.addons.PureRenderMixin],
  createPost: function(post) {
    return React.createElement(Post, post)
  },
  render: function() {
    const posts = this.props.posts.map(this.createPost)
    return React.DOM.ul({className: "frontposts"}, posts);
  }
});
