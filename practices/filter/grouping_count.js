'use strict';

function grouping_count(collection) {
  var list = {}; 
  for(var i= 0, l = collection.length; i< l; i++){ 
      var item = collection[i]; 
      list[item] = (list[item] +1 ) || 1; 
  } 
  return list; 
  //implement here
}

module.exports = grouping_count;
