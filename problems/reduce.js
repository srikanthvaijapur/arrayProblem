function reduce(elements,cb,startingValue){
    if(Array.isArray(elements)){
        let i = 0
        if(!startingValue){
            startingValue = elements[0];
        }
        for(;i<elements.length;i++){
            startingValue=cb(startingValue,elements[i]);
        }
        return startingValue;
    }
    return ;
}

module.exports = reduce;
