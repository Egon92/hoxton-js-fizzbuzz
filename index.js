//Print all numbers from 1 to 100. 

// if a number is divisible by 3, print "Fizz" 
// if it is divisible by 5, print "Buzz"
// if it is divisible by both 3 and 5, print "FizzBuzz"

// if it is divisible by 7, print "Fish"
// if it is divisible by 8, print "Bus"

for (let i=1; i<=100; i++){
    if(i%3===0){
       console.log(i,"Fizz")
   }if(i%5===0){
       console.log(i, "Buzz")
   }if((i%3===0) && (i%5===0)){
       console.log(i, "FizzBuzz")
   }if(i%7===0){
       console.log(i, "Fish")
   }if(i%8===0){
       console.log(i, "Bus")
   }
       console.log(i)       
   }
   