export function yearPast(age, pastAge, solarNum) {
    let yearsPassed = age - pastAge;
    return Math.round(yearsPassed / solarNum);
}