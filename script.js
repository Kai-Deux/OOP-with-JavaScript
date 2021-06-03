'use strict';

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
