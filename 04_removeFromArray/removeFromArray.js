const removeFromArray = function(array, ...check) {
    let newArray = [];
    array.forEach((item) => {
        let checked = false;
        check.forEach((x) => {
            if (x === item) {
                checked = true;
            }
        });
        if (checked) {
            /*remove from array*/
        } else {
            newArray.push(item);
        }
    });
    return newArray;
};
// Do not edit below this line
module.exports = removeFromArray;
