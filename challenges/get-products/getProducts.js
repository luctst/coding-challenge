const getProduct = arrayToTest => {
    const arrayToReturn = [];

    arrayToTest.map((el, i) => {
        let newItem = 1;

        for (let index = 0; index < arrayToTest.length; index++) {
            if (index !== i) arrayToReturn[i] = newItem *= arrayToTest[index];
        }
    });

    return arrayToReturn;
}

module.exports = getProduct;