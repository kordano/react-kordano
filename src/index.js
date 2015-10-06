import React from "react";
import Frontpage from "./components/Frontpage";
import {List,Map} from "immutable";

console.log("Greetings puny human!");

const posts = List(
  [Map(
    {title: "Title 1",
     abstract: "ababababababa",
     date: "2015-01-02"
    }),
   Map({title: "Title 2",
        abstract: "bcbcbcbcbcbc",
        date: "2015-02-04"}
      )
  ]
);

React.render(
  React.createElement(Frontpage, {posts: posts}),
  document.getElementById("content-container")
);
