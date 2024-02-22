// var: no reason to use var
// let: allow it to reassign
// const: do not allow it to reassign


const money = 20;
// money = 50;
const rich = money + 25 + 5;
// console.log(money);
// console.log(rich);


let count = 0;
count = count + 10;

// console.log(count);


const numbers = [23, 4, 23, 12, 56]

// console.log(numbers);

numbers[1] = 55;

numbers.push(22, 555, 666, 7777, 8888, 9999);

// console.log(numbers);


// object 
const student ={
    name: 'moyna pakhi',
    class: 12
}
// student ={name: 'kokil konthi'}   Change note the mathode

// console.log(student); //note 




// object 
let studentIdenty ={
    name: 'moyna pakhi',
    class: 12
}
studentIdenty ={name: 'kokil konthi' }    //Change right let the mathode

console.log(studentIdenty);