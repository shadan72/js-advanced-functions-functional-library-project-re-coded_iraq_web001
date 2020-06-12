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
    },
    
    filter: function(arr,ele){
     if(!(arr instanceof Array)){
       arr=Object.values(arr)
       
    const newArr = []
    
       for(let i=0;i<arr.length;i++){
          if(ele(arr[i]))
         newArr.push(arr[i])
       }
     return newArr  
     }
    },

 size: function(arr){
        if(arr instanceof Array){
          return arr.length
        }
        else{
          return Object.keys(arr).length
        }
 },
 
 first: function(arr,ele){
    if(!!ele){
      let firstOne=ele;
      return arr.slice(0,firstOne)
    }
    else{
      return arr[0];

    }
 },
 
 last: function(arr,ele){
    if(!!ele){
      let lastOne=-1*(ele);
      return arr.slice(lastOne)
    }
    else{
      return arr[arr.length-1];

    }
 },
 compact: function(arr){
   let newArr=[]
   for( let i=0;i<arr.length;i++){
     if(!!arr[i])
     newArr.push(arr[i])
   }
   return newArr
 },
 
 sortBy: function(arr,ele){
   const newArr=[...arr];
   return newArr.sort((a,b)=>{
     return ele(a) - ele(b)
   })
 },
 
 flatten: function(arr,ele){
   
 },
 
 
 
 
 
 
  }
})()

fi.libraryMethod()
