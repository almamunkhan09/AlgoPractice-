// This function takes a non empty array and returns a sorted squared array 



function sortedSquaredArray(array){
	
	
	let x = [];
	
	for (let i = 0; i<array.length;i++){
		
        x.push(array[i]*array[i]);
		
		}
	return x.sort((a,b)=> a-b);
}



// Do not edit the line below.
console.log(sortedSquaredArray([1,2,-1,-2,4,5,6,-8,9]));