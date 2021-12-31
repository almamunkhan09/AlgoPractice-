function firstNonRepeatingCharacter(string) {
    
    string =string +'$';

	const length = string.length;
    
    let result = -1;

    
	
	for(let i=0;i<length-1;i++){
		const str = string.slice(i+1);
		
		if(str.includes(string[i]) ){

           string = string.replaceAll(string[i],"$");
           
           
        }

        
		else {
            result = string.indexOf(string[i]);
            break;
        }
        
	}
  // Write your code here.
  
  
  return result;
}


console.log(firstNonRepeatingCharacter("00fabab"));