let names = ["Peter", "James", "Steve"]  //this is an array , Js equivalent of python list
let games = { name1: "PS4", name2:"Nintendo", name3: "Sega"}  //this is an object, JS equivalent of python dictionaries

// for(name in names) {
//     console.log(name)

// }


for (key in games){
    console.log(games[key]);
}

// while(conditon){statement

// }

// while loop is only checkinng for a true value

let r = true;
let i = 1

while(i < 10){
    if(i === 5){
        console.log("Thank you");
        break;
    }
    console.log("Thank you");
    i ++;
}