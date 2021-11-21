//Print all numbers from 1 to 100. 

// if a number is divisible by 3, print "Fizz" 
// if it is divisible by 5, print "Buzz"
// if it is divisible by both 3 and 5, print "FizzBuzz"

// if it is divisible by 7, print "Fish"
// if it is divisible by 9, print "Bus"



// THE FIRST WAY WITH IF-ELSE CONDITIONS

// for(let i=1; i<=100; i++){
    
//     if(i%3===0 && i%5===0 && i%7===0 && i%9===0){
//         console.log(FizzBuzzFishBus)
//    }else if(i%3===0 && i%5===0){
//        console.log("FizzBuzz")
//    }else if(i%3===0){
//        console.log("Fizz")
//    }else if(i%5===0){
//        console.log("Buzz")
//    }else if(i%7===0){
//        console.log("Fish")
//    }else if(i%9===0){
//        console.log("Bus")
//    }else{
//        console.log(i)       
//    }
// }


// THE SECOND WAY 

for (let i=0; i<=100; i++){
    
    let result = ``

    if(i%3===0) result += `Fizz`
    if(i%5===0) result += `Buzz`
    if(i%7===0) result += `Fish`
    if(i%9===0) result += `Bus`
    
    if (result === ``) console.log(i)
    else console.log(result) 

}