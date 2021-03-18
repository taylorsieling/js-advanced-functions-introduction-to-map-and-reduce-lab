// map-like functions
// remember to return a new array

function mapToNegativize(sourceArray) {
    let newArray = []
    sourceArray.forEach(element => {
        newArray.push(element * -1);
    });
    return newArray
}

function mapToNoChange(sourceArray) {
    let newArray = []
    sourceArray.forEach(element => {
        newArray.push(element);
    });
    return newArray
}

function mapToDouble(sourceArray) {
    let newArray = []
    sourceArray.forEach(element => {
        newArray.push(element *2);
    });
    return newArray
}

function mapToSquare(sourceArray) {
    let newArray = []
    sourceArray.forEach(element => {
        newArray.push(element * element)
    });
    return newArray
}

// reduce-like functions
// remember to return a value

function reduceToTotal(sourceArray, startingPoint) {
    let total = startingPoint != undefined ? startingPoint : 0;
    sourceArray.forEach(element => {
        total = total + element;
    });
    return total
}

function reduceToAllTrue(sourceArray) {
    let value = true
    sourceArray.forEach(element => {
        if (!element) {value = false}
    })
    return value
}
function reduceToAnyTrue(sourceArray) {
    let value = false
    sourceArray.forEach(element => {
        if (!!element) {value = true}
    })
    return value
}