// creating two functions software and softwareFolder 

const software = () => {
    console.log("I love VSCode")
}
const softwareFolder = () => {
    console.log("I love writng complex code")
};


// export them 
module.exports.software = software
module.exports.softwareFolder = softwareFolder