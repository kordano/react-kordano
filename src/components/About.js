import React from "react";
import {connect} from "react-redux";
import Nav from "./Nav";
import * as actionCreators from "../action_creators";

export const About = React.createClass({
  render: function() {
    const title = React.DOM.h1({className: "about-title"}, this.props.title);
    const content = React.DOM.p({className: "about-content"}, this.props.content);
    const nav = React.createElement(Nav, {views: this.props.views});
    const page = React.DOM.div({className: "about-page"}, title, content);
    return React.DOM.div(null, nav, page);
  }
});

function mapStateToProps(state) {
  return {
    title: state.getIn(["views", "about", "data", "title"]),
    content: state.getIn(["views", "about", "data", "content"]),
    views: state.getIn(["views"]).mapEntries(([_, value]) => value.deleteIn(["data"]))
  }
}

export const AboutContainer = connect(
  mapStateToProps,
  actionCreators
)(About)
