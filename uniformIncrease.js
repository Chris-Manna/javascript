// does a given array uniformally increase in value?
var isMonotone = function(arr){
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}
