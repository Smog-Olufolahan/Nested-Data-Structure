/*PART 3: Write a function called rotate which takes an array and a number, and moves each element however many spaces the number is to the right. For the value at the end of the array, rotate should move it back to the beginning. */

function rotate(array, number) {
    for(var i = 0; i < number; i++) {
      array.unshift(array.pop());
    }
    return array;
  }
  rotate([1,2,3], 1)
  rotate([1,2,3], 2)
  rotate([1,2,3], 3)
  