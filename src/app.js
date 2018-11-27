console.log('App.js is running!');

  //JSX - Javascript XML

  //only render the subtitle (and p tag) if subtitle exist - logical and operator
  //render new p tag - if options.length > 0 "Here are you options" "No options"
  var app=
  {
   title:'My first project -Kelly',
   subtitle:'Put your life in the hands:',
   options:['One','Two']

  };
var template=(
<div>
  <h1>{app.title}</h1>
  {app.subtitle && <p>{app.subtitle}</p>}
  <p>{app.options.length >0 ? 'Here are your options' : 'No options'}</p>
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
location:'Medellin'
//location: 'Medellin'
};
function getLocation(location)
{
if(location)
 {

    return <p>Location: {location}</p>;
 }
 else
 {
    return undefined;
 }
}
var templateTwo=
(
  <div>
    <h1>{user.name ? user.name : 'NN'}</h1>
    {(user.age && user.age >=18) && <p>Age: {user.age}</p> }
    {getLocation(user.location)}
  
  </div>
  )


var appRoot=document.getElementById('app');
ReactDOM.render(template,appRoot);
