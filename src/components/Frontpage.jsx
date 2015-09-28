import React from "react"

export default React.createClass({
  getPosts: function () {
    return this.props.posts || []
  },
  render: function() {
    return(
      <ul className="frontpage">
        {this.getPosts()
             .map(entry =>
               <li>
                 <h4>{entry.get("title")}</h4>
                 <small>{entry.get("abstract")}</small>
               </li>
             )
        }
      </ul>
    )
  }
})
