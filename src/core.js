var React = require('react'),
    Router = require('director').Router,
    Marked = require('react-marked'),
    XMLHttp = new XMLHttpRequest(),
    model = {
      views: [{text: 'home', url: "#/"},
              {text: 'articles', url: "#/articles"},
              {text: 'projects', url: "#/projects"},
              {text: 'about', url: "#/about"}],
      welcome: "The Cloud awaits!",
      articles: "Code that reaches the sky!"};
console.log("Greetings Lord Kordano!");

// --- NAVIGATION ---
var navView = React.createClass({
  render : function() {
    var navList = this.props.data.views.map(function (n) {
      return React.DOM.a({href: n.url, className: 'nav-entry'}, n.text); 
    });
    return React.DOM.nav(null, navList);
  }
});

function createNav() {
  var navbar = React.createElement(navView, {data: model});
  React.render(navbar, app.container.nav);
}

// --- LANDING ---
var landingView = React.createClass({
  render : function() {
    return React.DOM.h1(null, this.props.data.welcome);
  }
});

var landing = function createLanding() {
  var landing = React.createElement(landingView, {data: model});
  React.render(landing, app.container.main);
}
// --- ARTICLES ---
var articlesView = React.createClass({
  render : function() {
    return React.DOM.div(null, Marked(this.props.data));
  }
});

var articles = function createArticles() {
  XMLHttp.onreadystatechange = function() {
    if (XMLHttp.readyState == 4 && XMLHttp.status == 200) {
      var article = XMLHttp.responseText;
      var articles = React.createElement(articlesView, {data: article});
      React.render(articles, app.container.main);
    }
  };
  XMLHttp.open("GET", "/data/posts/first.md", true);
  XMLHttp.send();
};

// --- BUILDING ---
var app = {
      container: {
        main: document.getElementById('main-container'),
        nav: document.getElementById('nav-container')
      },
      routes: {
        '/': landing,
        '/articles': articles
      }
    },
    router = Router(app.routes);

createNav();
router.init();
document.location = "#/";

