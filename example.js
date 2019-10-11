//javascript basics tutorial 
let numbers = [1, 2, 3];

let employees = [
    {
        'name': 'boss',
        'age': 20
    },
    {
        'name': 'moo',
        'age': 19
    }

];

const x = 1;


//if else short hand
//if x>10 then color = red else color = blue 
const color = x > 10 ? 'red' : 'blue';
console.log(color);

// == mean check only value 
// === mean also check the data type 
if (x === 1) {
    console.log(1);
}

//this is for each
for (let i of numbers) {
    console.log(i);
}
//using foreach 
numbers.forEach(function (number) {
    console.log(number);
});
//arrow function
numbers.forEach((number) => {
    console.log(number);
});


//foreach, map , filter !!!
let filtered = employees.filter(function (employee) {
    return employee.age > 19;
}).map(function (employee) {
    return employee.name;
});

console.log(filtered);

//function 
//can assign the initial vaue to a function
function sum(num1 = 1, num2 = 2) {
    return num1 + num2;
}
//is same with 

//no need to have curlly brances and return keyword when it is one sentence 
const sum2 = (num1 = 1, num2 = 2) => num1 + num2;

console.log(sum());


//create the class
class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

//instantiate the object 
const boss = new Student("Nattapat", "Sutapakorn");

console.log(boss.getName());
