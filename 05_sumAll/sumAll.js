const sumAll = function(...args) {
    args = args.sort();
    debugger;
    if(args[0] < 0){
        return "ERROR";
    } 

    if(typeof args[0] === 'number' && typeof args[1] === 'number'){
        let sum = 0;
        for(let i = args[0]; i <= args[1]; i++){
            sum += i;
        }

        return sum;
    }

    return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
