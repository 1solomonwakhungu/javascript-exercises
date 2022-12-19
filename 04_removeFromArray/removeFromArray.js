const removeFromArray = function(arr, ...elements) {
    // Loop through the elements
    for(const elem of elements){
        let index = arr.indexOf(elem);
        if(index != -1){
            arr.splice(index, 1);
        }
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
