var React = require('react'),
    Router = require('director').Router,
    model = {
      views: [{text: 'home', url: "#/"},
              {text: 'articles', url: "#/articles"},
              {text: 'projects', url: "#/projects"},
              {text: 'about', url: "#/about"}],
      welcome: "The Cloud awaits!",
      articles: "Code that reaches the sky!"},
    app = {
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
    return React.DOM.h2(null, this.props.data.articles);
  }
});

var articles = function createArticles() {
  var articles = React.createElement(articlesView, {data: model});
  React.render(articles, app.container.main);
};

// --- BUILDING ---
createNav();
router.init();
