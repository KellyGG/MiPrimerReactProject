console.log('App.js is running!');

//JSX -Javascript XML


/*var template = React.createElement(
    "h1",
    { id: "someid" },
    "Something new"
  );*/
var template= <h1>Indecision App</h1>;
var appRoot=document.getElementById('app');
ReactDOM.render(template,appRoot);