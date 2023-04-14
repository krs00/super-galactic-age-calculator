
export default class Person {
  constructor(age) {
    this.age = age;
    // this.lastBdayAge = lastBdayAge;
    // this.futureBdayAge = futureBdayAge;
  } 

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
    let age = this.age / 1.88;
    return Math.round(age);
  }
  
  
}