

function helpFn(){
    console.log(`List Of All Command:
    1. node main.js tree "directoryPath"
    2. node main.js organise "directoryPath"
    3. node main.js help
    `);
}

module.exports ={
    helpkey:helpFn,
}