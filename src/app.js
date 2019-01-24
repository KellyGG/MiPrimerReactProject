console.log('App.js is running!');

  //JSX - Javascript XML

  //only render the subtitle (and p tag) if subtitle exist - logical and operator
  //render new p tag - if options.length > 0 "Here are you options" "No options"
  const app=
  {
   title:'My first project -Kelly',
   subtitle:'Put your life in the hands:',
   options:[]

  };

const onFormSubmit=(e) =>{
e.preventDefault();

const option =e.target.elements.option.value;

if(option){
app.options.push(option);
e.target.elements.option.value='';
render();
}
};

const onRemoveAll=()=>{
app.options=[];
render();

};

const OnMakeDecision=()=>{
  const  randomNum=Math.floor(Math.random() * app.options.length) ;
  const option=app.options[randomNum];
  alert(option);
};

const appRoot=document.getElementById('app');

const numbers=[55,101,1000];

const render=()=>{
  const template=(
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length >0 ? 'Here are your options' : 'No options'}</p>
    <button disabled={app.options.length==0} onClick={OnMakeDecision}>What should I DO?</button>
     <button onClick={onRemoveAll}>Remove All</button>
      <ol>
        {

          app.options.map((option)=><li key={option}>{option}</li>)
           
           
        }
      </ol>
      <form onSubmit={onFormSubmit}>
      <input type="text" name="option"/>
      <button>Add Option</button>
      </form>
    </div>
    );
    ReactDOM.render(template,appRoot);
};
render();
