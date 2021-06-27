function find(elements,cb){
    if(Array.isArray(elements)){
        for(let i = 0 ; i < elements.length;i++){
            if(cb(elements[i],i)){
                return elements[i]
            }
        }
    }
};

module.exports = find;