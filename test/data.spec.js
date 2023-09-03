import {dataFunctions} from '../src/data.js';
const arrayTest = [
  {
    char_id: 1,
    name: "Walter White",
    status: "Presumed dead",
    category: "Breaking Bad",
  },
  {
    char_id: 2,
    name: "Jesse Pinkman",
    status: "Alive",
    category: "Breaking Bad",
  },
  {
    char_id: 5,
    name: "Henry Schrader",
    status: "Deceased",
    category: "Breaking Bad",
  },
  {
    char_id: 4,
    name: "Saul Goodman",
    status: "Alive",
    category: "Breaking Bad, Better Call Saul",
  },
];
  describe('dataFunctions', () => {
  it('is a object', () => {
  expect(typeof dataFunctions).toBe('object');
  });
});

describe('filter', () => {
  it('is a function', () => {
    expect(typeof dataFunctions.filter).toBe('function');
  });
});
