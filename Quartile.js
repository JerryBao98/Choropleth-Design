// Removes outliers from the array
function filterOutliers(someArray) {
    
    // Copy and sort the given array
    var values = someArray.concat();
    values = values.sort(compareNumbers)

    // Find q1 and q3 to find the IQR and determine max/min later
    // Median might be useful later on
    var median = findMedian(values);
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