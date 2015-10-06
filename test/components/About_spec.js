import React from "react/addons";
import About from "../../src/components/About"
import {expect} from "chai";

const {renderIntoDocument,
       scryRenderedDOMComponentsWithTag} = React.addons.TestUtils;


describe("About", () => {
  
  it("renders title and content of about page", () => {
    const data = {title: "about", content: "How am I"};
    const props = {about: data, views: [{title: "home", link: "#/"}]};
    const component = renderIntoDocument(React.createElement(About, props));
    const view = scryRenderedDOMComponentsWithTag(component, "div");
    
    expect(view[0].props.children.length).to.equal(2);
    expect(view[0].props.children[1].props.children.length).to.equal(2);
  })
})
