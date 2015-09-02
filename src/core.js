var model = {views: [{text: 'home', url: "#/"},
                     {text: 'articles', url: "#/articles"},
                     {text: 'projects', url: "#/projects"},
                     {text: 'about', url: "#/about"}],
             welcome: "Welcome"}; 


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

var navbar = createNav();
var container = document.getElementById('nav-container');
React.render(navbar, container);
