// Return True if unique characters in characters string 
// is in document string and number of appearing is not less than in document



function generateDocument(characters, document) {
	
	if (characters.length < document.length) return false;
	
	let char = characters.split("");
	let doc = document.split("");
	
	let counted = [];
	
	for (let i = 0;i<doc.length;i++){
		
		if (counted.includes(doc[i])) continue;
		
		else {
		    
		   
		    
			
			if (count(doc,doc[i])>count(char,doc[i])){
				return false;
				
			}
			
		}
	}
	
  // Write your code here.
  return true;
}

function count (array,key){
    
    return array.filter((x) => x ===key).length;
}

let x = "helloworld ";
let y  = "hello wOrld";
console.log(generateDocument(x,y));