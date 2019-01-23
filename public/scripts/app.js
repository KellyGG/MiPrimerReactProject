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
// const user=
// {
// name:'Kelly',
// age:25,
// location:'Medellin'
// //location: 'Medellin'
// };
// function getLocation(location)
// {
// if(location)
//  {

//     return <p>Location: {location}</p>;
//  }
//  else
//  {
//     return undefined;
//  }
// }
// const templateTwo=
// (
//   <div>
//     <h1>{user.name ? user.name : 'NN'}</h1>
//     {(user.age && user.age >=18) && <p>Age: {user.age}</p> }
//     {getLocation(user.location)}

//   </div>
//   )

var count = 0;
var addOne = function addOne() {
  count = count + 1;
  renderCounterApp();
};

var minusOne = function minusOne() {
  count = count - 1;
  renderCounterApp();
};

var reset = function reset() {
  count = 0;
  renderCounterApp();
};

//make button "-1" -setup minusOne function and register -log "minusOne"
//Make reset button "reset" - setup reset function -log "reset"


var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {

  var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Count: ',
      count
    ),
    React.createElement(
      'button',
      { onClick: addOne },
      '+1'
    ),
    React.createElement(
      'button',
      { onClick: minusOne },
      '-1'
    ),
    React.createElement(
      'button',
      { onClick: reset },
      'reset'
    )
  );

  ReactDOM.render(templateTwo, appRoot);
};
renderCounterApp();
