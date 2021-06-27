function filter(elements,cb){
    let arr = []
    if(Array.isArray(elements)){
        for(let i = 0 ; i < elements.length ; i++){
            if(cb(elements[i],i)){
                arr.push(elements[i]);
            }
        }
    }
    return arr
}

module.exports = filter;