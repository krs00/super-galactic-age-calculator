import { yearFuture } from "../src/js/yearFuture";

test("Should return how many years have yet to pass untill a future birthday.", () => {
    expect(yearFuture(61, 56, 1)).toBe(10);
});
