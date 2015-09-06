var yarr = require('yarr.js');

var model = {views: [{text: 'home', url: "#/"},
                     {text: 'articles', url: "#/articles"},
                     {text: 'projects', url: "#/projects"},
                     {text: 'about', url: "#/about"}],
             welcome: "Welcome"}; 

var mainContainer = document.getElementById('main-container');

console.log("Greetings Lord Kordano");

var navView = React.createClass({
  render : function() {
    var navList = this.props.data.views.map(function (n) {
      return React.DOM.a({href: (n.url), className: 'nav-entry'}, n.text); 
    });
    return React.DOM.nav(null, navList);
  }
});

function createNav() {
  return React.createElement(navView, {data: model});
}

var indexView = React.createClass({
  render : function() {
    return React.DOM.h1(null, data.props.data.welcome);
  }
});

function createIndex() {
  return React.createElement(indexView, {data: model});
}

var navbar = createNav();
var navContainer = document.getElementById('nav-container');
React.render(navbar, navContainer);

var index = createIndex();
React.reander(index, mainContainer);
