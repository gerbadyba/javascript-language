let distance=120

if (distance==5 || distance==10){
    console.log('Awarded Ksh100')

}

else if(distance==20 || distance==30){
    console.log('Awarded Ksh 200')

}

else if (distance>=50 && distance<=100){
    console.log('Awarded Ksh 500')

}

else{
    console.log("Invalid distance")
}