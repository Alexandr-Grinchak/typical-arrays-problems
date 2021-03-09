
exports.min = function min (array) {
    if(array && array.length > 0) {
        let newArray = array.sort((a, b) => a - b);
        return newArray[0];
    } else {
        return 0;
    }
}

exports.max = function max (array) {
    if(array && array.length > 0) {
        let newArray = array.sort((a, b) => a - b);
        return newArray[array.length - 1];
    } else {
        return 0;
    }
}

exports.avg = function avg (array) {
    if(array && array.length > 0) {
        let aver = 0;
    for(let i = 0; i < array.length; i++) {
        aver = aver + array[i];
    };
  return aver / array.length;
     } else {
    return 0;
    }
}
