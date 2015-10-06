import React from "react";
import {Map, List} from "immutable";
import {RouteHandler} from "react-router";

function createDate(dateString) {
  return new Date(dateString);
}

const posts = List([
  Map(
    {title: "Merry Xmas",
     abstract: "and a happy new year!",
     date: createDate("2014-12-24")
    }),
  Map({title: "Happy Birthday",
        abstract: "to you!",
        date: createDate("2015-04-15")}
   )
]);

const about = Map({
  title: "About me",
  content: "What can I know? What should I do? What may I hope?"
});

const views = List([
  Map({title: "home", link: "#/"}),
  Map({title: "about", link: "#/about"})
]);



export default React.createClass({
  render: function() {
    const data = {posts: posts.toJS(), about: about.toJS(), views: views.toJS()};
    return React.createElement(RouteHandler, data);
  }
});
