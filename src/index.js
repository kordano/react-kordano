import React from "react";
import Frontpage from "./components/Frontpage";
import {List,Map} from "immutable";

console.log("Greetings puny human!");

const posts = List([Map({title: "oh my gosh, it's jolly, jumpy, spiffy",
                         abstract: "The title says it all!"}),
                    Map({title: "Sad story",
                         abstract: "I lied, not sad at all..."})]);

React.render(
  React.createElement(Frontpage, {posts: posts}),
  document.getElementById("content-container")
);
