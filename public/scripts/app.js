'use strict';

console.log('App.js is running!');

//JSX -Javascript XML


/*var template = React.createElement(
    "h1",
    { id: "someid" },
    "Something new"
  );*/
//JSX - Javascript XML
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Indecision App'
  ),
  React.createElement(
    'p',
    null,
    ' This is some info'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item one'
    ),
    React.createElement(
      'li',
      null,
      'Item two'
    ),
    React.createElement(
      'li',
      null,
      'Item three'
    )
  )
);

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Kelly G'
  ),
  React.createElement(
    'p',
    null,
    ' Age: 25'
  ),
  React.createElement(
    'p',
    null,
    'Location:Medellin'
  )
);
//Create a templateTwo var JSX expression
//div
//h1 -> Kelly G
//p-> Age: 25
//p->Location:Medellin
//Render templateTwo instead of template

var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);
