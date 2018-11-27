'use strict';

console.log('App.js is running!');

//create app object title/subtitle
//user title/subtitle in the template
//render template
//JSX - Javascript XML

var app = {
  title: 'My first project -Kelly',
  subtitle: 'Information:'

};
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  React.createElement(
    'p',
    null,
    ' ',
    app.subtitle
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
var user = {
  name: 'Kelly',
  age: 25,
  Location: 'Medellin'
};

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name
  ),
  React.createElement(
    'p',
    null,
    ' Age: ',
    user.age
  ),
  React.createElement(
    'p',
    null,
    'Location: ',
    user.Location
  )
);
//Create a templateTwo var JSX expression
//div
//h1 -> Kelly G
//p-> Age: 25
//p->Location:Medellin
//Render templateTwo instead of template

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
