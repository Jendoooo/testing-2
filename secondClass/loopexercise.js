const prompt = require("prompt-sync")({sigint:true});

let name = prompt("What's your name; ")

let age = prompt (" And how old are you ?")

let userResult = (`${name}, ${age}`)

let input1 = parseInt(prompt("Put in your first value: "))
let inputt2 = parseInt(prompt ("Put in your second value: "))

let res = (input1 + inputt2 )
console.log(res)


