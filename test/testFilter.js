const array = require("../array");
const filter = require("../problems/filter")

const cb = (n)=>n>3;
const result = filter(array,cb)
console.log(result)
