import React from "react/addons";
import FrontPage from "../../src/components/Frontpage"
import {expect} from "chai";

const {renderIntoDocument,
       scryRenderedDOMComponentsWithTag} = React.addons.TestUtils;

function createDate(dateString) {
  return new Date(dateString);
}

describe("Frontpage", () => {

  it("renders a list of frontposts", () => {
    const data = {
      posts: [
        {
          title: "title1",
          abstract: "abstract1",
          date: createDate("1970-01-01")
        },
        {
          title: "title2",
          abstract: "abstract2",
          date: createDate("1970-01-02")
        }
      ]};
    const component = renderIntoDocument(React.createElement(FrontPage, data));
    const frontpage = scryRenderedDOMComponentsWithTag(component, "ul");
    expect(frontpage[0].props.children.length).to.equal(2);
  })
  
 });
