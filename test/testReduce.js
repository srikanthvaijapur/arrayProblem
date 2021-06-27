const array = require("../array");
const reduce = require("../problems/reduce");

const cb = (acc,val)=>acc+val;
// const result = reduce(array,cb);
const result = reduce(array,cb,3);
console.log(result)