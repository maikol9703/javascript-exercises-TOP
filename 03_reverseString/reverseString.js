const reverseString = function(string) {
    let sliceStr=string.split("");
    let stringRev="";
    for (let i= string.length - 1;i>=0;i--){
        stringRev+=`${sliceStr[i]}`;
    }
    return stringRev;

};

// Do not edit below this line
module.exports = reverseString;
