function map(elements,cb){
    let arr = []
    if(Array.isArray(elements)){
        for(let i = 0 ; i < elements.length ; i++){
            arr.push(cb(elements[i],i))
        }
    }
   return arr;
}

module.exports = map;