



// spreading...

let numbers = [1, 2, 3, 4, 5, 6, 7];

// console.log(...numbers)  // 1, 2 , 3 ,4 5,6 ,7'


function sum(a, b, c, d, e, f, g) { // parameter
    console.log(a + b + c + d + e + f + g)
}

sum(...numbers) // argument


// merging

let arr1 = [1, 2, 3, 4, 5]
let arr2 = [6, 7]

// console.log(arr1.concat(arr2))

const mergeredArr = [...arr1, ...arr2];
console.log(mergeredArr)

// objects

let obj1 = { a: 1, b: 2, c: 3 };

let obj2 = { d: 4, e: 5 };

// console.log(obj2)

let obj3 = { ...obj1, ...obj2 }
console.log(obj3);




//object.assign

let obj4 = { name: "babalu", age: "22", city: "America" };

let dabalu = Object.assign({}, obj4)

console.log(dabalu)


//


let classOfReact = [
    { name: "babalu", age: 22 },
    { name: "dabalu", age: 20 },
    { name: "sabalu", age: 21 }
]

// fing the sum of age of all students in class of react


let sumOfStudents = classOfReact.reduce((acc, currVal) => acc + currVal.age, 0)
console.log(sumOfStudents)


// destructuring
let obj5 = { name: "babalu", age: "22", city: "America" };


const student = {
    names: 'Alice',
    age: 20,
    scores: {
        math: 90,
        physics: 85,
        chemistry: 88
    }
};

console.log(student.names)
console.log(student.age)
console.log(student.scores.math)


let { names, age, scores: { math, physics, chemistry } } = student;  // obect destructuring

console.log(age, names, math)