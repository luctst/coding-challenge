/**
 * CHALLENGE - Given an array with X elements you should create a function who return a new array 
 * with the numbers organized by ascending order.
 * 
 * DATA - Use this array.
 * [4, 2, 3, 1]
 * [1, 2, 4, 3]
 * [10, 30, 25, 9, 60, 110, 105, 200, 190]
 * 
 * TEST -  Run the command `npm run C1` all test should be succeded.
 */

const sort = (array) => {
    let max = Math.max(...array); // Get higher value element.
    let min = Math.min(...array); // Get lower value element.

    while (array[array.length - 1] !== max || array[0] !== min) {
        
        for (let i = 0; i < array.length; i++) {
            let el = array[i]; // Get first iteration element.
            let elAfter = array[i + 1]; // Get next element by iteration.

            if (el > elAfter) { // Change element position.
                array[i + 1] = el;
                array[i] = elAfter;
            } 
        }
    }
    const newArray = [...array];
    return newArray;
}

module.exports = sort;