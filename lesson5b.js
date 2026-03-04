// arrow functions with parameters

const greet=(word)=>{

    console.log("Hello",word);

}

greet("Joe")
greet("Gavi")



const favourite=(county)=>{

    console.log("MY Favourite county is",county);

}

favourite("Nairobi")
favourite("Mombasa")
favourite("Naivasha")



// function to add 2 numbers
let add=(num1, num2)=>{
    sum=num1 + num2

    console.log(`The sum is ${sum}`)

}

add(100,50)


// function to subtract 2 numbers
let subtract=(num1, num2)=>{
    difference=num1 - num2

    console.log(`The subtraction is ${difference}`)

}

subtract(250,50)

// function to module 2 numbers
let modulus=(num1,num2)=>{
    mod=num1 % num2

    console.log(`The module is ${mod}`)

}
modulus(155,4)


// function to Divide 2 numbers
const divide=(num1,num2)=>{
    division=num1 / num2

    console.log(`The division is ${division}`)
}
divide(200,50)

// function to find simple interest 
const simple_interest=(principal,rate,time)=>{
    interest=principal*rate*time/100

    console.log(`The interest is ${interest}`);

}
simple_interest(25000,2.5,2)

// function to find BMI
const BMI=(weight,height)=>{
    bodymassindex=weight/(height**2)

    console.log("The BMI is", bodymassindex);
}
BMI(70,1.75)

// function to find Area of a circle

let area=(radius)=>{
    areaofcircle=3.14*(radius*radius)

    console.log("The area is",areaofcircle)
}

area(7)

// function to find the area of a triangle
let triangle=(base,height)=>{
    Area=0.5*base*height

    console.log("The area is",Area);

}

triangle(10,5)