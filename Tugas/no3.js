let bb = 90
let tb = 1.7
let bmi = 90/1.7**2
if(bmi < 18.5){
    console.log("Kekurangan berat badan")
}
else if(bmi >= 18.5 && bmi < 25){
    console.log("Normal(Ideal)")
}
else if(bmi >= 25 && bmi <30){
    console.log("Kelebihan berat badan")
}
else{
    console.log("Kegemukan")
}
