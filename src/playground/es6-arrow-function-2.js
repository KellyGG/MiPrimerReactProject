//arguments object - no longer bound with arrow functions
const add= (a,b) => {
    //console.log(arguments);
return a+b;
}

console.log(add(1,3,100));
//this keyword - no longer bound

const user=
{
    name:'Andrew',
    cities: ['Philadelphia','New York','Dublin'],
    printPlacesLived (){
        return this.cities.map((city)=> this.name + ' has lived in ' +  city);
    // console.log(this.name);
    // console.log(this.cities);
    //const that=this;

    // this.cities.forEach((city)=> {
    // console.log(this.name+ ' has lived in ' + city);

    // });
return cityMessages;


    }
};
console.log(user.printPlacesLived());

//challenger area

const multiplier={
    numbers: [10,20,30],
    multiplyby:3,
    multiply(){
    return this.numbers.map((number)=>number*this.multiplyby);
    }
//numbers - array of numbers
//multiplyby-single number
//multiply - return a new array where the number have been multiplied
};
console.log(multiplier.multiply()); //[1,2,3] 3 [2,4,6]