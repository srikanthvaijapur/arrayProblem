const array = require("../array");
const find = require("../problems/find")

const cb = (element,i)=>element>2;
const result = find(array,cb)
console.log(result)