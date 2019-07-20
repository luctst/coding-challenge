import test from "ava";
import organizeArray from "../challenges/organize-array/organize-array";

test("Test with [4, 2, 3, 1]", t => {
    const expected = [1, 2, 3, 4];
    const testOne = organizeArray([4, 2, 3, 1]);
    t.deepEqual(testOne, expected);
});

test("organize-array test with [1, 2, 4, 3]", t => {
    const expected = [1, 2, 3, 4];
    const testTwo = organizeArray([1, 2, 4, 3]);

    t.deepEqual(testTwo, expected);
});

test("organize-array test with [10, 30, 25, 9, 60, 110, 105, 200, 190]", t => {
    const expected = [9, 10, 25, 30, 60, 105, 110, 190, 200];
    const testThree = organizeArray([10, 30, 25, 9, 60, 110, 105, 200, 190]);

    t.deepEqual(testThree, expected);
});