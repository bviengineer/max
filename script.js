//Write a function that accepts an array as an argument and returns the maximum number in the array

function max(arr){
    var maximumNumber = arr[0];
    for(var i = 1; 1 < arr.length; i++){
        if(arr[i] > maximumNumber){
            maximumNumber = arr[i];
        }
    }
    return maximumNumber;
}