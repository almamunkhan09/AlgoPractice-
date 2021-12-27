// A function that Check if  a string is PAlindrome or not


function isPalindrome(string) {
	length = Math.floor(string.length /2);
	let result = true;
	
	for (let i= 0;i<length;i++){
		
		if (string[i] !== string[string.length-1-i]){
			result = false;
			break
		}
		
	}
  // Write your code here.
	
	return result;
}


console.log(isPalindrome('abcdcba'));
// Do not edit the line below.
//exports.isPalindrome = isPalindrome;
