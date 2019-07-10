'use strict';

function choose_even(collection) {
  return collection.filter((num) => {return num % 2 == 0})
  //implement here
}

module.exports = choose_even;
