console.log('App.js is running!');

  //JSX - Javascript XML

  //only render the subtitle (and p tag) if subtitle exist - logical and operator
  //render new p tag - if options.length > 0 "Here are you options" "No options"
  const app=
  {
   title:'My first project -Kelly',
   subtitle:'Put your life in the hands:',
   options:['One','Two']

  };
const template=(
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

let count=0;
const addOne=()=>
{
  count=count +1;
  renderCounterApp();
};

const minusOne=()=>
{
  count=count -1;
  renderCounterApp();
};

const reset=()=>
{
  count=0;
  renderCounterApp();
};


//make button "-1" -setup minusOne function and register -log "minusOne"
//Make reset button "reset" - setup reset function -log "reset"


const appRoot=document.getElementById('app');

const renderCounterApp=()=>{

  const templateTwo=(
    <div>
    <h1>Count: {count}</h1>
    <button onClick={(addOne)}>+1</button>
    <button onClick={(minusOne)}>-1</button>
    <button onClick={(reset)}>reset</button>
    </div>
    );

    ReactDOM.render(templateTwo,appRoot);

};
renderCounterApp();