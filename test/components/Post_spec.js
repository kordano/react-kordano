import React from "react/addons";
import Post from "../../src/components/Post";
import {expect} from "chai";

const {renderIntoDocument,
       scryRenderedDOMComponentsWithTag,
       findRenderedDOMComponentWithClass} = React.addons.TestUtils;

function createDate(dateString) {
  return new Date(dateString);
}

describe("Post", () => {
  it("renders title and abstract of a frontpost", () => {
    const postData = {
      title: "title1",
      abstract: "abstract1",
      date: createDate("1970-01-01")
    }
    const component = renderIntoDocument(React.createElement(Post, postData));

    const post = scryRenderedDOMComponentsWithTag(component, "li");
    expect(post[0].props.children.length).to.equal(3);
    
    let renderedTitle = findRenderedDOMComponentWithClass(component, "post-title");
    expect(renderedTitle.getDOMNode().textContent).to.equal("title1");
    
    let renderedAbstract = findRenderedDOMComponentWithClass(component, "post-abstract");
    expect(renderedAbstract.getDOMNode().textContent).to.equal("abstract1");
  })

  it("shows the days since the post date", () => {
    const postDate = createDate("1970-01-01");
    const today = new Date();
    const postData = {
      title: "title1",
      abstract: "abstract1",
      date: postDate
    }
    const component = renderIntoDocument(React.createElement(Post, postData));
    const renderedDate = findRenderedDOMComponentWithClass(component, "post-date");
    const parsedTextDate = parseInt(renderedDate.getDOMNode().textContent);
    const delay = Math.floor((today - postDate) / (24 * 3600000))
    expect(parsedTextDate).to.equal(delay);
  })
})
