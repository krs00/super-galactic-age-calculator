import Person from '../src/js/person.js';


describe(Person, () => {

  // getEarthAge()
  test('should return inputted age, aka age in Earth years', () => {
    const Kymani = new Person(22);
    expect(Kymani.getAge()).toEqual(22);
  });

  // getMercuryAge()
  test('should return inputted age in Mercury years', () => {
    const Kymani = new Person(22);
    expect(Kymani.getMercuryAge()).toEqual(92);
  });

  // getVenusAge()
  test('should return inputted age in Venus years', () => {
    const Kymani = new Person(22);
    expect(Kymani.getVenusAge()).toEqual(35);
  });

  // getMarsAge()
  test('should return inputted age in Mars years', () => {
    const Kymani = new Person(22);
    expect(Kymani.getMarsAge()).toEqual(12);
  });

  // getJupiterAge()
  test('should return inputted age in Jupiter years', () => {
    const Kymani = new Person(22);
    expect(Kymani.getVenusAge()).toEqual(2);
  });
});