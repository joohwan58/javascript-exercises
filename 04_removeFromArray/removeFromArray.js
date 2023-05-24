const removeFromArray = function(array, ...check) {
    let newArray = [];
    array.forEach((item) => {
        if (check.includes(item)) {
            /*remove from array*/
        } else {
            newArray.push(item);
        }
    });
    return newArray;
};
// Do not edit below this line
module.exports = removeFromArray;
