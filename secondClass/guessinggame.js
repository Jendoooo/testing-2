const prompt = require("prompt-sync")(({sigint:true}));
answer = 5

guess_no = ""
counter = " "

let num = 7
while(guess_no != num){
    let guess_no = prompt("GUess a number between 1 and 10 ")

    if (num == guess_no){
    console.log("You are right ")
    break

}
    else {
    console.log("Wrong")
}
}

// while(guess != answer){
//     let guess = parseInt(prompt("Please guess a number between 1 and 10 "))
//     if (guess != answer){
//         console.log("You are wrong , please guess again")}
//     if (guess == answer){
//         console.log("You are right. Welldone")
//         break
//     }
// }

//asignment , guess within 5 trials, and display the no of remaining trials lef

// while(guess != answer){
//     let guess = parseInt(prompt("Please guess a number between 1 and 10 "))
//     counter ++ 
//     let figure = 5 - counter
//     if (guess != answer){
//         console.log("You are wrong , you have " + figure + " Tries left.")
//     }
//         if (counter == 5){
//             break
//         }

//     if (guess == answer){
//         console.log("You are right. You got the answer in " + counter + " Tries. Well done!!")
//         break
//     }
// }