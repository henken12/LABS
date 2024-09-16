"use strict";
console.log('question 1 ................................................');
class University {
    constructor(name, dept) {
        this.name = name;
        this.dept = dept;
    }
    graduation(year) {
        console.log(`Graduating ${this.dept} ${year} students`);
    }
}
let miu = new University('miu', 'compro');
miu.graduation(2025);
miu.graduation(2020);
let bankAccount = {
    money: 2000,
    deposite(value) {
        this.money += value;
    }
};
console.log('question 2.....................................................');
let myself = {
    name: 'henok',
    bankAccount: bankAccount,
    hobbies: ['violine,cooking']
};
myself.bankAccount.deposite(3000);
console.log(myself);
console.log('question 3 .....................................................');
function describePerson(person) {
    return `${person.name} is ${person.age} years old and is ${person.isStudent ? 'a student.' : 'not a student.'} `;
}
const henok = {
    name: 'henok',
    age: 25,
    isStudent: false
};

console.log(describePerson(henok));

