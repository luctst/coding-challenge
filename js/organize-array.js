/**
 * Variables
 */
const tab = [4, 2, 3, 1];

/**
 * Declaration
 */
const sort = (array) => {
    for (let i = 0; i < array.length; i++) {
        let el = array[i]; // Retrieve first iteration element.
        let elAfter = array[i + 1]; // Retrieve next element by iteration.
        
        array[i + 1] = el;
        array[i] = elAfter; 
    }
    console.log(tab);
}

/**
 * Execution
*/
sort(tab);