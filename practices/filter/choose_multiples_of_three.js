'use strict';
// function checkNum(num) {
//   return num % 3 == 0;
// }

// function choose_multiples_of_three(collection) {
//    return collection.filter(checkNum)
//   //implement here
// }
function choose_multiples_of_three(collection) {
  return collection.filter((num) => {return num % 3 == 0})
 //implement here
}


module.exports = choose_multiples_of_three;
