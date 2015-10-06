import React from "react/addons";
import Nav from "./Nav";
import Post from "./Post";

export default React.createClass({
  mixins: [React.addons.PureRenderMixin],
  createPost: function(post) {
    return React.createElement(Post, post)
  },
  render: function() {
    const posts = this.props.posts.map(this.createPost);
    const nav = React.createElement(Nav, {views: this.props.views});
    const frontposts = React.DOM.ul({className: "frontposts"}, posts);
    return React.DOM.div(null, nav, frontposts);
  }
});
