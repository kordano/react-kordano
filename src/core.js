var yarr = require('yarr.js');
var React = require('react');
var Link = require('yarr.js').Link;

var model = {views: [{text: 'home', url: "#/"},
                     {text: 'articles', url: "#/articles"},
                     {text: 'projects', url: "#/projects"},
                     {text: 'about', url: "#/about"}],
             welcome: "The Cloud awaits!",
             articles: "Code that reaches the sky!",
             container: {
               main: document.getElementById('main-container')
             }}; 

var mainContainer = document.getElementById('main-container');

console.log("Greetings Lord Kordano!");


// --- NAVIGATION ---
var navView = React.createClass({
  render : function() {
    var navList = this.props.data.views.map(function (n) {
      return React.createElement(Link, {href: n.url, className: 'nav-entry'}, n.text); 
    });
    return React.DOM.nav(null, navList);
  }
});

function createNav() {
  return React.createElement(navView, {data: model});
}

// --- LANDING ---
var landingView = React.createClass({
  render : function() {
    return React.DOM.h1(null, this.props.data.welcome);
  }
});

yarr('/', function() {
  var landing = React.createElement(landingView, {data: model});
  React.render(landing, mainContainer);
});

// --- ARTICLES ---
var articlesView = React.createClass({
  render : function() {
    return React.DOM.h2(null, this.props.data.articles);
  }
});

yarr('/articles', function() {
  var articles = React.createElement(articlesView, {data: model});
  React.render(articles, mainContainer);
});

// --- BUILDING ---
var navbar = createNav();
var navContainer = document.getElementById('nav-container');
React.render(navbar, navContainer);
