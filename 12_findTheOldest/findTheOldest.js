const findTheOldest = function(array) {
    function getAge(item) {
        if ('yearOfDeath' in item) {
            return item.yearOfDeath - item.yearOfBirth;
        } else {
            return new Date().getFullYear() - item.yearOfBirth;
        }
    }
    return array.reduce((oldest, person) => {
        if (getAge(person) > getAge(oldest)) {
            return person;
        } else {
            return oldest;
        }
    }, { name: "placeholder", yearOfBirth: 2011, yearOfDeath: 2011});
    
    
};

// Do not edit below this line
module.exports = findTheOldest;
