import Person from '../src/js/person.js';


describe(Person, () => {

  // getEarthAge()
  test('should return inputted age, aka age in Earth years', () => {
    const Kymani = new Person(22);
    expect(Kymani.getEarthYears).toEqual(22);
  });

  // getMercuryAge()
  test('should return inputted age in Mercury years', () => {
    const Kymani = new Person(22);
    expect(Kymani.getMercuryYears).toEqual(33);
  });
});