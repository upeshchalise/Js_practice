// Write a function createHelloWorld. It should return a new function that always returns "Hello World".

const createHelloWorld = function () {
  return function (...args) {
    return "Hello world";
  };
};

const f = createHelloWorld();
console.log(f()); // "Hello World"
