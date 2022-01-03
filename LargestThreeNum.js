function findThreeLargestNumbers(array) {
    // Write your code here.
      
      let result = [-Math.pow(10, 6),-Math.pow(10,6),array[0]];
  
  for (let i =1;i<array.length;i++){
      
      let num =array[i];
      
      if (num>=result[2]){
      result.shift();
      
      result.push(num);
      }
      
      else if(num>result[1] && num<=result[2]){
          let temp = result[1]
          result[1] = num;
          result[0] = temp;
      }
  
      else if (num>result[0] && num<=result[1] ){
          result[0] = num
      }
  
  else continue;
      
  }
      
      return result;
  }

  console.log(findThreeLargestNumbers([-1, -2, -3, -7, -17, -27, -18, -541, -8, -7, 7]));