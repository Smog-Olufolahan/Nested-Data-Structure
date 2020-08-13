/*PART 4: Write a function called makeXOGrid which takes in two parameters, rows and columns, and returns an array of arrays with the number of values in each subarray equal to the columns parameter and the number of subarrays equal to the rows parameter. The values in the sub-arrays should switch between "X" and "O".
 */

function makeXOGrid(rows, columns) {
    var array = [];
    var xoGrid = true;
    for(var i = 0; i < rows; i++) {
      array.push([]);
      for(var j = 0; j < columns; j++) {
        if(xoGrid) {
          array[i].push('X');
          xoGrid = false;
        }
        else {
          array[i].push('O');
          xoGrid = true;
        }
      }
    }
    return array;
  }
  makeXOGrid(1, 4)
  makeXOGrid(3, 2)
  makeXOGrid(3, 3)
  
  