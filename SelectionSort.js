// function swap (a,b){
//     let temp = a;
//     a = b;
//     b = temp;
//     //return 
    
// }

// //console.log(swap(5,6))

function selectionSort(array) {

    for (let i = 0; i<array.length;i++){

        

       let  minposition = i;
       let minimum  = array [i];

       for (let j=i+1;j<array.length;j++){

            if (array[j]<minimum){
                minimum = array[j];
                minposition =j;
            }


       }
       
       if(array[i]!=minimum){
           
           let temp = array[i];
           array[i] = array[minposition];
           array[minposition] = temp;
           
           //swap(array[i],array[minposition]); // !!! need to find why this line did not worked.
       }
    
    }

    return array;
  }

  
  
  

  
 console.log(selectionSort([8, 5, 2, 9, 5, 6, 3]));  
  
  // Do not edit the line below.
  //exports.selectionSort = selectionSort;
  