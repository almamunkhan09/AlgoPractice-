function bubbleSort(array) {
    
      
  //let count  = 0; need to check if the algorithm works perfectly and dont run the second loop  when its already sorted
  
      for (let k = 0; k < array.length;k++){
          
          //count++;
          
          let swapped = 0;
          for (let i = 1; i<array.length; i++){
              if(array[i]<array[i-1]){
                  
                  const temp = array[i-1];
                  array[i-1] = array[i];
                  array[i] = temp;
                  
                  swapped++;
      
      
              }
      
          }
          
          if (swapped === 0) break;
      }
  //console.log(count);
  return array;
  }
  
  console.log(bubbleSort([8,9,2,3,4,5,1,8,9,10,11]));
