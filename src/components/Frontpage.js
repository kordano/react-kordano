import React from "react/addons";
import {connect} from "react-redux";
import Nav from "./Nav";
import Post from "./Post";
import {toJS} from "immutable"
import * as actionCreators from "../action_creators";

export const Frontpage = React.createClass({
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

function mapStateToProps(state) {
  return {
    posts: state.getIn(["views", "frontpage", "data", "posts"]),
    views: state.getIn(["views"]).mapEntries(([_, value]) => value.deleteIn(["data"]))
  }
}

export const FrontpageContainer = connect(
  mapStateToProps,
  actionCreators
)(Frontpage)
