
export default class Person {
  constructor(age, pastAge, futureAge) {
    this.age = age;
    this.pastAge = pastAge;
    this.futureAge = futureAge; 
  } 

  // SECTION 1: GET AGE OF PERSON ON DIFFERENT PLANETS

  getAge() {
    return this.age;
  }

  getMercuryAge() {
    let age = this.age / 0.24;
    return Math.round(age); 
  }

  getVenusAge() {
    let age = this.age / 0.62;
    return Math.round(age); 
  }

  getMarsAge() {
    let age = this.age / 1.88;
    return Math.round(age); 
  }

  getJupiterAge() {
    let age = this.age / 11.86;
    return Math.round(age);
  }
  // SECTION 1 END

  // SECTION 2: GET YEARS SINCE PAST BDAY
  
  
}