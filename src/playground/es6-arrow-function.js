// function square(x)
// {
//         return x*x;
// };
// console.log(square(3));

// // const squareArrow=(x) =>{
// //     return x*x;
// // };

// const squareArrow = (x)=> x*x;

// console.log(squareArrow(4));

//Challenge -Use arrow functions
//getFirstName('Mike Smith') ->"Mike"
//Create regular arrow function

// const getFirstName=(fullName) =>{
// return fullName.split(' ') [0];

// };

//Create arrow function using shorthand syntax
const getFirstName=(fullname)=>fullname.split(' ')[0];

console.log(getFirstName('Andrew Smith'));