//This function takes an array of integers and target sum. 
//If summation of two integers is equivalent to the target sum 
//then it return these integers pair.




const twoNumberSum = (array, targetSum)=> {
	
    const length = array.length;
    let result = [];
   
   
    for (let i = 0;i<length;i++){
       for (let j = i+1;j<length;j++){
           
            if(array[i] + array [j] === targetSum ){
                result.push(array[i]);
                result.push(array[j]);



               
           }
    }
 
       
       
}
return result;

}

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6],10));


// Do not edit the line below.
//exports.twoNumberSum = twoNumberSum;
