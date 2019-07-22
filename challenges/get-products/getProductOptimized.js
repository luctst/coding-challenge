/**
  * This function will run in O(n)
  * @param {Array} arrayToTest An array of integers
  */
const getProductOptimized = arrayToTest => {
    const prefixProducts = [];
    arrayToTest.map((el, i) => {
        if (prefixProducts.length !== 0) {
            prefixProducts.push(prefixProducts[i - 1] * el);
        } else {
            prefixProducts.push(el);
        }
    })

    const suffix_products = [];
    arrayToTest.reverse().map((el, i) => {
        if (suffix_products.length !== 0) {
            suffix_products.push(suffix_products[i - 1] * el);
        } else {
            suffix_products.push(el);
        }
    });
    suffix_products.reverse();

    const result = [];
    arrayToTest.reverse().map((el, i) => {
        if (i === 0) {
            result.push(suffix_products[i + 1]);
        } else if (i === arrayToTest.length - 1) {
            result.push(prefixProducts[i - 1]);
        } else {
            result.push(prefixProducts[i - 1] * suffix_products[i + 1]);
        }
    });

    return result;
};

module.exports = getProductOptimized;