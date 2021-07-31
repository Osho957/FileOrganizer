let fs = require("fs");
let path = require("path");

function treeFn(src){
    if(src==undefined){
        src = process.cwd();

    }
        let content = fs.readdirSync(src);
        let parentFolder = path.basename(src);
        let completePath = "|____"+ parentFolder;
        for(let i=0;i<content.length;i++){
            completePath=completePath+"\n\t"+"|---"+content[i];

        }
        console.log(completePath);
    
}

module.exports ={
    treekey:treeFn,
}