const str = "Lucas";
const strTest = 'Antoine';
const strTest2 = "Geronimo";

const reverseString = string => {
    let strTab = [];
    for (const i of string) {
        strTab.push(i);
    }
    for (let y = 0; y < strTab.length; y++) {
        let count = y + 1;
        let index = strTab[y];
        let last = strTab.length - count;

        if (y != last) {
            strTab[y] = strTab[last];
            strTab[last] = index;
        } else {
            console.log(strTab);
            return strTab;
        }
    }
};

module.exports = reverseString;