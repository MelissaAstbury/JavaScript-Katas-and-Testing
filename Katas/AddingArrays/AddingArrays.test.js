const addingArrays = require('./AddingArrays');

describe('addingArrays', () => {
  it('return add the total of the two arrays_Postive numbers only', () => {
    const actual = addingArrays([1, 2, 3], [4, 5, 6]);
    const expected = 21;
    expect(actual).toEqual(expected);
  });
});

describe('addingArrays', () => {
  it('return add the total of the two arrays_Negative numbers only', () => {
    const actual = addingArrays([-1, -2, -3], [-4, -5, -6]);
    const expected = -21;
    expect(actual).toEqual(expected);
  });
});

describe('addingArrays', () => {
  it('return add the total of the two arrays_Postive and negative numbers', () => {
    const actual = addingArrays([-1, 2, -3], [4, 5, -6]);
    const expected = 1;
    expect(actual).toEqual(expected);
  });
});
