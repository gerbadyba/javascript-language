let area=function(base,height){
    let Area=0.5*base*height
    console.log("The area is", Area)
}
area(10,5)

let BMI=function(weight,height){
    let bodymassindex=weight/(height**2);
    console.log("The BMI is", bodymassindex)
}

BMI(70,1.75)


const circle=function(diameter){
    const perimeter=3.14*diameter
    console.log("The perimeter is", perimeter)
}

circle(14)

const simple_interest=function(principal,rate,time){
    const interest=principal*rate*time/100                    
    console.log("The simple interest is",interest)
}

simple_interest(50000,2.5,2)