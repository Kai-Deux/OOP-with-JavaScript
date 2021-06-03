'use strict';
/*
const Person = function (firstName, birthYear) {
    // Instance properties

    this.firstName = firstName;
    this.birthYear = birthYear;

    // Never do this
    // this.calcAge = function () {
    //     console.log(2037 - this.birthYear);
    // };
};

const kai = new Person('Kai', 1993);
console.log(kai);

// 1. New {} is created
// 2. Function is called, this = {}
// 3. {} linked to prototype
// 4. Function automatically return {}

const usha = new Person('Usha', 1968);
const gray = new Person('Gray', 2017);
console.log(usha, gray);

console.log(kai instanceof Person);

// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
};

kai.calcAge();
usha.calcAge();
gray.calcAge();

console.log(kai.__proto__);
console.log(kai.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(kai));
console.log(Person.prototype.isPrototypeOf(gray));
console.log(Person.prototype.isPrototypeOf(Person));

//.prototyeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(kai.species, gray.species);

console.log(kai.hasOwnProperty('firstName'));
console.log(kai.hasOwnProperty('species'));

console.log(kai.__proto__);
// Object.prototype (top of prototype chain)
console.log(kai.__proto__.__proto__);
console.log(kai.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 6, 5, 6, 9, 9, 3];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
    return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);
*/

// class expression
// const PersonCl = class {}
    
// class declaration
class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    // Methods will be added to .prototype property
    calcAge() {
        console.log(2037 - this.birthYear);
    }

    greet() {
        console.log(`Hey ${this.firstName}`);
    }

    get age() {
        return 2037 - this.birthYear;
    }

    set fullName(name) {
        console.log(name);
        if (name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name!`);
    }

    get fullName() {
        return this._fullName;
    }
}

const jess = new PersonCl('Jess Rei', 1998);
console.log(jess);
jess.calcAge();
console.log(jess.age);

console.log(jess.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//     console.log(`Hey ${this.firstName}`);
// };
jess.greet();

// 1. Classes are Not hoisted
// 2. Classes are first-citizens
// 3. Classes are executed in strict mode

const walter = new PersonCl('Walter San', 1987);


const account = {
    owner: 'Kai',
    movements: [200, 530, 120, 300],

    get latest() {
        return this.movements.slice(-1).pop();
    },

    set latest(mov) {
        this.movements.push(mov);
    },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);
