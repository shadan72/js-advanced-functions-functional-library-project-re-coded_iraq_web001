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

    reduce: function(arr,acc, callback) {
       let i;
  if (acc || acc === undefined) {
    i = 0;}
    else{
    i = arr[0];
    arr = arr.slice(1);
    for (const ele of arr) {
      acc = callback(acc, arr[i],arr);
    }
    }
  return acc;
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
