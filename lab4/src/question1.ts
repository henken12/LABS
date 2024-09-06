console.log('question 1 ................................................');
class University {

    name: string;
    dept: string;

    constructor(name: string, dept: string) {
        this.name = name;
        this.dept = dept;

    }
    graduation(year: number) {
        console.log(`Graduating ${this.dept} ${year} students`);
    }
}

let miu = new University('miu', 'compro');
miu.graduation(2025);
miu.graduation(2020);

let bankAccount: {
    money: number;
    deposite: (value: number) => void;
} = {
    money: 2000,
    deposite(value: number): void {
        this.money += value;
    }
};


console.log('question 2.....................................................');
let myself: {
    name: string;
    bankAccount: {
        money: number;
        deposite: (value: number) => void;
    };
    hobbies: string[];
} = {
    name: 'henok',
    bankAccount: bankAccount,
    hobbies: ['violine,cooking']
};

myself.bankAccount.deposite(3000);
console.log(myself);

console.log('question 3 .....................................................');

interface Person {

    name: string;
    age: number;
    isStudent: boolean;

}
function describePerson(person: Person): string {
    return `${person.name} is ${person.age} years old and is ${person.isStudent ? 'a student.' : 'not a student.'} `;
}
const henok: Person ={
    name:'henok',
    age:25,
    isStudent:false
};


const nahom: Person ={
    name:'Nahom',
    age:30,
    isStudent:true
};

console.log(describePerson(henok));
console.log(describePerson(nahom));