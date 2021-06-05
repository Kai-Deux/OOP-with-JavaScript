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

Person.hey = function () {
    console.log('Hey There👋🏽');
    console.log(this);
};
Person.hey();


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


// class expression
// const PersonCl = class {}
    
// class declaration
class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    // Instance Methods
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

    // Set a property that already exists
    set fullName(name) {
        console.log(name);
        if (name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name!`);
    }

    get fullName() {
        return this._fullName;
    }

    // Static Method
    static hey() {
        console.log('Hey There👋🏽');
        console.log(this);
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

PersonCl.hey();

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

const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 1997;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sara = Object.create(PersonProto);
sara.init('Sara', 1979);
sara.calcAge();
*/

/*
// Inheritance Between "Classes": Constructor Functions

const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
    Person.call(this, firstName, birthYear);
    this.course = course;
};

// Linking prototypes
// Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const thunder = new Student('Thunder', 2020, 'Computer Science');
thunder.introduce();
// thunder.calcAge();

console.log(thunder.__proto__);
console.log(thunder.__proto__.__proto__);

console.log(thunder instanceof Student);
console.log(thunder instanceof Person);
console.log(thunder instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

// Inheritance Between "Classes": ES6 Classes
class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

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
     // Static Method
     static hey() {
        console.log('Hey There👋🏽');
        console.log(this);
    }
}
class StudentCl extends PersonCl {
    constructor(fullName, birthYear, course) {
        // Always needs to happen first!
        super(fullName, birthYear)
        this.course = course;
    }
    
    introduce() {
        console.log(`My name is ${this.fullName} and I study ${this.course}`);
    }
    
    calcAge() {
        console.log(` I am ${2037 - this.birthYear} years old, but as a student I feel more like ${2037 - this.birthYear + 10}`);
    }
}


const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();


// Inheritance Between "Classes": Object.create
const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;
};

StudentProto.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();
*/

class Account {
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.pin = pin;
        this.movements = [];
        this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${owner}`);
    }

    // Public Interface
    deposit(val) {
        this.movements.push(val)
    }

    withdraw(val) {
        this.deposit(-val)
    }

    approveLoan(val) {
        return true;
    }

    requestLoan(val) {
        if (this.approveLoan(val)) {
            this.deposit(val);
        console.log('Loan Approved');
    }
}
}

const acc1 = new Account('Kai', 'ZAR', 1111);
console.log(acc1);

// acc1.movements.push(250);
// acc1.movements.push(-140);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
acc1.approveLoan(1000);

console.log(acc1);
console.log(acc1.pin);

