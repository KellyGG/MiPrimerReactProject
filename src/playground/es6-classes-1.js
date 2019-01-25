
class Person {

    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGretting() {

        //return 'Hi. I am ' + this.name + '!';
        return `Hi. I am ${this.name}!`;
    }
    getDescription() {

        return `${this.name} is ${this.age} year(s) old.`;
    }

}

class Student extends Person {
    constructor(name, age, major) {
        //super works to refer to constructor of parent class
        super(name, age);
        this.major = major;
    }
    hasMajor() {

        return !!this.major;
    }
    getDescription() {
        //the same of the getDesctiption method that appear in the beggining
        let description = super.getDescription();
        if (this.hasMajor()) {
            description += `Their major is ${this.major}.`;
        }

        return description;

    }
}
class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;

    }
    getGretting() {
        let homeLocation = super.getGretting();
        if (this.homeLocation) {

            homeLocation += `I'm visiting from ${this.homeLocation}.`;
        }
        return homeLocation;

    }

}

//const me = new Student('Kelly Garzón', 25, 'Computer science');
const me = new Traveler('Kelly Garzón', 25, 'medellin');
//console.log(me.getGretting());
console.log(me.getGretting());

const other = new Traveler(undefined,undefined,'Nowhere');
//console.log(other.getGretting());
console.log(other.getGretting());