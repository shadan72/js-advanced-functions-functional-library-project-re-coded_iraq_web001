const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(arr, callback) {
 
      for(const ele in arr){
        callback(arr[ele], ele, arr)
      }
    return arr
    },

    map: function(arr, callback) {
     const newArr=[];
      for(const ele in arr){
       newArr.push(callback(arr[ele], ele, arr)) 
      }
     return newArr
    },

    reduce: function(arr,acc, starVal) {
       let i;
  if (startingPoint !== undefined) {
    i = startingPoint;
    for (const ele of arr) {
      i = acc(i, ele);
    }
  } else {
    i = arr[0];
    arr = arr.slice(1);
    for (const ele of arr) {
      val = acc(val, element);
    }
  }
  return val;
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
