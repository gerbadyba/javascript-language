// 1.Create an arrow function that accepts a number n and prints all even numbers from 1 to n

let number=(n)=>{
    for(let n=2 ;n<=10; n+=2){
    console.log("The Even number is",n)
    }

}
number(4)

console.log("...................")

// 2.Create an arrow function that prints all odd numbers from 1 to n using a while loop

let numbers=(n)=>{
    for(let n=1 ; n<=10; n+=2){
        console.log("The Odd number is",n)
    }
}
numbers(5)

console.log("...................")

// 3.Create an arrow function that prints all numbers from n down to 1
let descending=(n)=>{
    for(let n=10; n>=1; n--){
        console.log("Descending order",n)
    }
} 
descending(10)

console.log("...................")

// 4.Write an arrow function square that takes a number as a parameter and logs its square
const square=(n)=>{
    sqr=n*n
    console.log("The square is",sqr)
}
square(5)

