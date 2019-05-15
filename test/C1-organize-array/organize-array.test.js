const sort = require("../../challenges/C1-organize-array/organize-array");

describe("Organize array test", () => {
    test("Test tab test1.", () => {
        expect(sort([4, 2, 3, 1])).toMatchObject([1, 2, 3, 4]);
    });

    test("Test tab test2", () => {
        expect(sort([1, 2, 4, 3])).toMatchObject([1, 2, 3, 4]);
    });

    test("Test tab test3", () => {
        expect(sort([10, 30, 25, 9, 60, 110, 105, 200, 190])).toMatchObject([9, 10, 25, 30, 60, 105, 110, 190, 200]);
    });
});