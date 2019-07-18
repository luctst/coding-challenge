const organizeArray = array => {
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

module.exports = organizeArray;