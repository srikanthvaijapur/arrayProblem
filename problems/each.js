function each(elements,cb){
    if(Array.isArray(elements)){
        for(let i = 0 ; i < elements.length ; i++){
            cb(elements[i],i)
        }
    }
   return;
}

module.exports = each;