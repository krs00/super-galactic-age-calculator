import Person from '../src/js/person.js';


describe(Person, () => {

  test('should return inputted age of new Person Object', () => {
    const Kymani = new Person(22);
    expect(Kymani.age).toEqual(22);
  });
});