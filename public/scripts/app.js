'use strict';

console.log('App.js is running!');

//JSX - Javascript XML

//only render the subtitle (and p tag) if subtitle exist - logical and operator
//render new p tag - if options.length > 0 "Here are you options" "No options"
var app = {
  title: 'My first project -Kelly',
  subtitle: 'Put your life in the hands:',
  options: ['One', 'Two']

};
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    'p',
    null,
    app.subtitle
  ),
  React.createElement(
    'p',
    null,
    app.options.length > 0 ? 'Here are your options' : 'No options'
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
  location: 'Medellin'
  //location: 'Medellin'
};
function getLocation(location) {
  if (location) {

    return React.createElement(
      'p',
      null,
      'Location: ',
      location
    );
  } else {
    return undefined;
  }
}
var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name ? user.name : 'NN'
  ),
  user.age && user.age >= 18 && React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  getLocation(user.location)
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
