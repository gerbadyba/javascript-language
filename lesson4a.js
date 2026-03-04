// functions with parameters

function greet(name){
    console.log('Hello',name);

}
greet("Joe")
greet("Gavi")



function favourites(county){
    console.log('favourite county is',county);

}
favourites('Nairobi')
favourites('Mombasa')
favourites('Nakuru')



function add(num1,num2){
    let sum=num1 + num2
    console.log(`The sum is ${sum}`);
}

add(80,20)


function subtract(num1,num2){
    let difference=num1 - num2
    console.log(`The differnce is ${difference}`)

}

subtract(100,50)



function divide(num1,num2){
    let division=num1/num2
    console.log(`The division is ${division}`)

}

divide(500,5)



function module(num1,num2){
    let modulus=num1%num2
    console.log(`The modulus is ${modulus}`)

}

module(155,4)



function simple_interest(principal,rate,time){
    let interest=principal*rate*time
    console.log(`The simple interest is ${interest}`)

}

simple_interest(50000,2.5,2)


function sqr(side,side){
    let areaofsquare=side*side
    console.log(`The area is ${areaofsquare}`)

}

sqr(40,40)

