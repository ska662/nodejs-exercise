var arr = [5, [22], [[14]], [[4]],[5,6]];
function flatten(arr) {
  if(!Array.isArray(arr)) {
    return [arr];
  }

  var array = [];
  for(var i = 0; i < arr.length; i++) {
    array = array.concat(flatten(arr[i]));
  }
  return array;
}

console.log(flatten(arr));