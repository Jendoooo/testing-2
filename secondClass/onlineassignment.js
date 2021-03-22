const prompt = require("prompt-sync")({sigint:true});
console.log("A code to test breaking out of a while loop without using 'break'.")
userinput = " "
while(userinput != "QUIT"){
    console.log("This code will print this line perpetually unless you type 'QUIT'")
    userinput = prompt("iF you wish, type in QUIT to break out of the while loop and print the code ")
    
}

// Assignment ; create a system that ask whether we want to continue or quit
// exit, quit should end the program 

//create a game that the user can relate with and can exit with quit 