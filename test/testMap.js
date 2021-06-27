const array = require("../array");
const map = require("../problems/map")

let result = map(array,(cb,i)=>{
    return cb+2
});
console.log(result)