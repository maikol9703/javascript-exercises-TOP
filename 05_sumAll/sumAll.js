const sumAll = function(a,b) {
    
    if (a>b){
        let temp=a;
        a=b;
        b=temp;
    }
    if ((a <0 || b <0) || (isNaN(a) || isNaN(b)) || (typeof a ==="string" || typeof b === "string")){
        return "ERROR"
    }
    total=0;
    for (let i=a;i<=b;i++){
        total+=i;
    }
    return total;

};

// Do not edit below this line
module.exports = sumAll;
