console.log('App.js is running!');

//create app object title/subtitle
//user title/subtitle in the template
//render template
  //JSX - Javascript XML

  var app=
  {
   title:'My first project -Kelly',
   subtitle:'Information:'

  };
var template=(
<div>
  <h1>{app.title}</h1>
  <p> {app.subtitle}</p>
  <ol>
    <li>Item one</li>
    <li>Item two</li>
    <li>Item three</li>

  </ol>
</div>
);
var user=
{
name:'Kelly',
age:25,
Location: 'Medellin'
};

var templateTwo=
(
  <div>
    <h1>{user.name}</h1>
    <p> Age: {user.age}</p>
    <p>Location: {user.Location}</p>
  
  </div>
  )
//Create a templateTwo var JSX expression
//div
//h1 -> Kelly G
//p-> Age: 25
//p->Location:Medellin
//Render templateTwo instead of template

var appRoot=document.getElementById('app');
ReactDOM.render(template,appRoot);
