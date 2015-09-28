import React from "react/addons";
import Landing from "../../src/components/Frontpage.js";
import {expect} from "chai";

const {renderIntoDocument, scryRenderedDOMComponentsWithTag, Simulate} = React.addons.TestUtils;
  
describe("Frontpage", () => {
  it("renders a list of latest 5 posts using abstracts and titles", () => {});
  it("invokes a post view callback when a post is clicked", () => {});
});
