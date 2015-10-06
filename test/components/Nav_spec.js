import React from "react/addons";
import Nav from "../../src/components/Nav";
import {expect} from "chai";

const {renderIntoDocument,
       scryRenderedDOMComponentsWithTag} = React.addons.TestUtils;


describe("Nav", () => {
  it("renders a list of available views", () => {
    const views = [
      {title: "home", link: "#/home"},
      {title: "about", link: "#/about"}
    ];
    const component = renderIntoDocument(React.createElement(Nav, {views: views}));
    const nav = scryRenderedDOMComponentsWithTag(component, "nav");
    
    expect(nav[0].props.children.length).to.equal(2);
  })
})
