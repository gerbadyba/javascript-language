// tax scenario on certain salaries

let salary=200000

if (salary>=0 && salary<=30000){
    console.log('Tax rate is 10%')

}

else if (salary>30000 && salary<=60000){
    console.log('Tax rate is 15%')

}

else if (salary>60000 && salary<=100000){
    console.log('Tax rate is 20%')

}

else if (salary>100000){
    console.log('Tax rate is 25%')

}

else{
    console.log('Unidentified salary')

}