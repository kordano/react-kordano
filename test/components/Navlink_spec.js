import React from "react/addons";
import Navlink from "../../src/components/Navlink";
import {expect} from "chai";

const {renderIntoDocument,
       scryRenderedDOMComponentsWithTag} = React.addons.TestUtils;

describe("Navlink", () => {
  it("renders title and link of a view link", () => {
    const viewData = {title: "home", link: "#/home"};
    const component = renderIntoDocument(React.createElement(Navlink, viewData));
    const navlink = scryRenderedDOMComponentsWithTag(component, "a");
    
    expect(navlink[0].getDOMNode().textContent).to.equal("home");
    expect(navlink[0].props.href).to.equal("#/home")
  })
})

