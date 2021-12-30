
// Return true if sequence is subset of array in similar order


function isValidSubsequence(array, sequence) {
	let positions = [];
	
	for(let i = 0;i<sequence.length;i++){

      

        positions.push(array.indexOf(sequence[i]));
		    array.splice(array.indexOf(sequence[i]),1,0);

        
        
		
	}
  let decison = true;
  if (positions.includes(-1)){
    decison = false;
    
  }
  else{
    for(let i =1;i<positions.length;i++){

    

      if(positions[i]>positions[i-1]){
        decison = true;
      }
  
      else{
        decison = false;
        break;
      }
  }
  

  }
  

  return decison;
}

console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10],[1, 6, -1, 10]));