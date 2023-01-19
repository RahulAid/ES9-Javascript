// Rest-Operation

const myObject = {
    a: 1,
    b: 2,
    c: 3
  };
  const { a, ...r } = myObject;
  // a = 1
  // r = { b: 2, c: 3 }
  
  // Can also be used in function input parameters
  function restObjectInParam({ a, ...r }) {
      console.log(a); // 1
      console.log(r); // {b: 2, c: 3}
  }
  
  restObjectInParam({
    a: 1,
    b: 2,
    c: 3
  });