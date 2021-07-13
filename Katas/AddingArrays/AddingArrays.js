const addingArrays = (arr1, arr2) => {
  const array1 = arr1.reduce((a, b) => a + b);
  const array2 = arr2.reduce((a, b) => a + b);
  return array1 + array2;
};

module.exports = addingArrays;
