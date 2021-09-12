// tab 1

function tripleAdd(num1) {
    return function(num2) {
      return function(num3) {
        return num1 + num2 + num3;
      };
    };
  }
  
  function tripleAdd1(num1, num2, num3) {
    return num1 + num2 + num3;
  }
  
  tripleAdd(10)(20)(30); // returns 60
  tripleAdd1(10, 20, 30);
  console.log(tripleAdd(10)(20)(30));
  
  
  // tab 2
  
  function quadrupleAdd(num1) {
    return function(num2) {
      return function(num3, num4) {
        return num1 + num2 + num3 + num4;
      };
    };
  }
  
  quadrupleAdd(10)(20)(30, 40);