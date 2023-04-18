export function yearFuture(futureAge, age, solarNum) {
    let yearsUntill = futureAge - age;
    return Math.round(yearsUntill / solarNum);
}