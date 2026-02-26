// gross income and monthly contributions

let income=150000

if (income<=5999){
    console.log('Monthly contribution is Ksh150')

}

else if (income>=6000 && income<=7999){
    console.log('Monthly contribution is Ksh300')
    
}

else if (income>=8000 && income<=11999){
    console.log('Monthly contribution is Ksh400')
    
}

else if (income>=12000 && income<=14999){
    console.log('Monthly contribution is Ksh500')
    
}

else if (income>=15000 && income<=19999){
    console.log('Monthly contribution is Ksh600')
    
}

else if (income>20000 && income<=24999){
    console.log('Monthly contribution is Ksh750')
    
}

else if (income>=25000 && income<=29999){
    console.log('Monthly contribution is Ksh850')
    
}

else if (income>=30000 && income<=49999){
    console.log('Monthly contribution is Ksh1000')
    
}

else if (income>=50000 && income<=99999){
    console.log('Monthly contribution is Ksh1500')
    
}

else if (income>=100000){
    console.log('Monthly contribution is Ksh2000')
    
}

else{
    console.log('Invalid Contribtuion')
    
}