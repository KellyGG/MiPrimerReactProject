console.log('App.js is running!');

//JSX -Javascript XML


/*var template = React.createElement(
    "h1",
    { id: "someid" },
    "Something new"
  );*/
  //JSX - Javascript XML
var template=(
<div>
  <h1>Indecision App</h1>
  <p> This is some info</p>
  <ol>
    <li>Item one</li>
    <li>Item two</li>
    <li>Item three</li>

  </ol>
</div>
);

var templateTwo=
(
  <div>
    <h1>Kelly G</h1>
    <p> Age: 25</p>
    <p>Location:Medellin</p>
  
  </div>
  )
//Create a templateTwo var JSX expression
//div
//h1 -> Kelly G
//p-> Age: 25
//p->Location:Medellin
//Render templateTwo instead of template

var appRoot=document.getElementById('app');
ReactDOM.render(templateTwo,appRoot);
