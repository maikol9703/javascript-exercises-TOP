const repeatString = function(string,num) {
    if (num===-1){
        return "ERROR";
    }
    let finString="";
    for (let i=0;i<num;i++){
        finString+=`${string}`;
    }
    return finString;
};

repeatString("hey",3)

// Do not edit below this line
module.exports = repeatString;
