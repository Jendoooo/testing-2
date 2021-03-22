const prompt = require("prompt-sync")({sigint:true});
//create a guessing game that the user can relate with using prompt  and can exit with quit. \
// let the computer generate a random value
//"A code to test breaking out of a while loop without using 'break'
let keepgoing = Math.floor(Math.random() * 10);
while (keepgoing){
    let userNum = prompt("Guess a number: ")
    if(keepgoing != userNum){
        console.log("Keep Going");
        input = prompt(" Are you tired ? Do you want to quit? If yes, type emd") 
        if (input ==="END"){
            keepgoing = false;
        }   }
}



