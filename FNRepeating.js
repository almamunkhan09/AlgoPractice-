function firstNonRepeatingCharacter(string) {

    string =string+'0';

	const length = string.length;
    let result = -1;
	
	for(let i=0;i<length-1;i++){
		const str = string.slice(i+1);
		
		if(str.includes(string[i]) )
        {
           string = string.replaceAll(string[i],0);
        }


			
			
		
		
		else {result = string.indexOf(string[i]);break;}
	}
  // Write your code here.

  console.log(string);
  return result;
}


console.log(firstNonRepeatingCharacter("ababccd"));