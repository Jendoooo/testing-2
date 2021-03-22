const prompt = require("prompt-sync")({sigint:true});
// function bag1(){
//     console.log("Hello Olajide")   
// }

// bag1()

// const sum = (a,b) => {
//     let x = a + b 
//     console.log ("THe sum of " + a + " and " + b + " is " + x)
//     return true;

// }
// sum(10,100)
// arguments are anything which function needs in order to run smoothly

// declare a function that works with the user input 



const mul = () => {
    let c = parseInt(prompt("Plese enter your first number: "))
    let d = parseInt(prompt("Please enter the second number: "))
    let x = (c * d )
    return console.log("The answer is " + x)

}
mul()

//MongoDB, React, Node, Express 
 let name = prompt("What is your name? ")
let course = prompt("Choose a pathway")

 const formClass = (name, course = "React") =>{
     return console.log(`Hello ${name} you have registered for ${course}`);
 };

 formClass(name, course)