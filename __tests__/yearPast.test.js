import { yearPast } from "../src/js/yearPast.js";

test("Should return number difference between two inputted numbers (age & pastAge) ", () => {
    expect(yearPast(30, 20, 1)).toBe(10);
});
