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

    reduce: function(arr,callback,acc) {
       let ele;
  if (acc || acc === 0) {
    ele = 0;}
    else{
    acc = arr[0];
      ele=1;
    }
    for (ele; ele<arr.length;ele++) {
      acc = callback(acc, arr[ele],arr);
    }
    
  return acc;
    },

    functions: function() {

    },
    
    find: function(arr,ele){
     if(!(arr instanceof Array)){
       arr=Object.values(arr)
       
     }
       
       for(let i=0;i<arr.length;i++){
          if(ele(arr[i]))
         return arr[i]
       }
     return undefined  
    }

  }
})()

fi.libraryMethod()
