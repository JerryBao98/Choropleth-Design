// Function to sort 
function compareNumbers(a, b) {
    return a - b;
}

// Removes outliers from the array
function filterOutliers(someArray) {
    
    // Copy and sort the given array
    var values = someArray.concat();
    values = values.sort(compareNumbers)

    // Find q1 and q3 to find the IQR and determine max/min later
    // Median might be useful later on
    // var median = findMedian(values);
    var q1 = values[Math.floor((values.length / 4))];
    var q3 = values[Math.ceil((values.length * (3 / 4)))];
    var iqr = q3 - q1;

    // Then find min and max values
    // Anything beyond these are considered outliers
    var maxValue = q3 + iqr*1.5;
    var minValue = q1 - iqr*1.5;

    // Then filter anything beyond or beneath these values.
    var filteredValues = values.filter(function(x) {
        return (x <= maxValue) && (x >= minValue);
    });

    return filteredValues;
}


// Chunks the array into equal sizes
function chunkArray(myArray, chunk_size){
    var index = 0;
    var arrayLength = myArray.length;
    var tempArray = [];
    
    for (index = 0; index < arrayLength; index += chunk_size) {
        myChunk = myArray.slice(index, index+chunk_size);
        // Do something if you want with the group
        tempArray.push(myChunk);
    }

    return tempArray;
}

// Get the outliers
function returnOutliers(originalvalues, filteredvalues){
    Array.prototype.diff = function(a) {
        return this.filter(function(i) {return a.indexOf(i) < 0;});
    };

    return originalvalues.diff(filteredvalues)
}

// Main function
function main(numberArray, partitionSize){
    console.log("Array with Outliers removed: \n" + filterOutliers(numberArray));
    var arrayNested = chunkArray(filterOutliers(numberArray), partitionSize);
    for (var i = 0; i < arrayNested.length; i ++){
        console.log("Each individual partition: \n" + arrayNested[i]);
    }
    var outliersArray = returnOutliers(numberArray, filterOutliers(numberArray));
    console.log("Partition with elements >=: " + outliersArray[outliersArray.length-1]);
    console.log(""+ outliersArray);
}

var numberArray = [1,23,1,3234,12,2,3,4,1,2,3,1321,23,76,45,745,67,43];
var a1 = [10000000,56,4360,346,235,235,3256,235,567,5245,6757577];
var a2 = [46,234,124,56,234,56,4134,546,314,67,8,7847,3454,78,99];
var a3 = [1,1,1,1,1,1,1,1,1,1,1,1,32435434546];
var a4 = [77777,7,77,,77777,77777,77777,77777,777777,7777,1];
var partitionSize = 4;

main(numberArray, partitionSize)

// Find the median of a given data set, 
// if even the averages of 2 datapoints will be taken
/* function findMedian(values) {
    var half = Math.floor(values.length/2);
    
    // if the length of the array is odd
    if(values.length % 2){
        return values[half];
    }
    // else if its even, take the average
    else{
        return (values[half-1] + values[half]) / 2.0;
    }
} */

/* // Return the standard deviation from an array
function standardDeviation(values){
    var avg = average(values);
    
    var squareDiffs = values.map(function(value){
        var diff = value - avg;
        var sqrDiff = diff * diff;
        return sqrDiff;
    });
    
    var avgSquareDiff = average(squareDiffs);
  
    var stdDev = Math.sqrt(avgSquareDiff);
    return stdDev;
}

// Return the average 
function average(data){
    var sum = data.reduce(function(sum, value){
        return sum + value;
    }, 0);
  
    var avg = sum / data.length;
        return avg;
}
 */
/* function getChunk(values, deviation){
    var outerarray = []
    for (i = 0; i < values.length; i ++){
        var nestedarray = []
        nestedarray.push(values[i])
        if (i + 1 < values.length && values[i]+deviation <= values[i+1]){
            nestedarray.a
        }
    }
} */

// Find remaining quartiles, 1 and 3
/* function splitQuartiles(values, median){
    if (values.length % 2){
        first_quartile = 
        third_quartile = 
        arr = values.splice(0, values.indexOf(median));
        return arr
    } 
} */

/* console.log(sortedArray)
console.log(sortedArray.length)
console.log(findMedian(sortedArray))
console.log(splitQuartiles(sortedArray, findMedian(sortedArray))) */