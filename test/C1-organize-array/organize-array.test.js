const sort = require("../../js/organize-array");
const test1 = sort([4, 2, 3, 1]);
const test2 = sort([1, 2, 4, 3]);
const test3 = sort([10, 30, 25, 9, 60, 110, 105, 200, 190]);

describe("Organize array test", () => {
    test("Test tab test1.", () => {
        expect(test1).toMatchObject([1, 2, 3, 4]);
    });

    test("Test tab test2", () => {
        expect(test2).toMatchObject([1, 2, 3, 4]);
    });

    test("Test tab test3", () => {
        expect(test3).toMatchObject([9, 10, 25, 30, 60, 105, 110, 190, 200]);
    });
});