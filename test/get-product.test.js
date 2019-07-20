import test from "ava";
import getProduct from "../challenges/get-products/getProducts";

test("Test getProduct function with [1, 2, 3, 4, 5]", t => {
    const testOne = getProduct([1, 2, 3, 4]);
    const expected = [120, 60, 40, 30, 20];

    t.is(testOne, expected);
});

test("Test getProduct function with [3, 2, 1]", t => {
    const testTwo = getProduct([3, 2, 1]);
    const expected = [2, 3, 6];

    t.is(testTwo, expected);
});