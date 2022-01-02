function caesarCipherEncryptor(string, key) {
    let array = string.split(""); 
    
    for (let i = 0 ; i<array.length;i++){
        array[i] = charecterShift(array[i],key);
    }
    
    return array.join("");
    
  }
  
  
  function charecterShift(char,key){
      
      key %=26;
      
      let asciiValue = char.charCodeAt(0)+key;
      if (asciiValue>122){
          asciiValue = asciiValue%122 +96;
      }
       return String.fromCharCode(asciiValue);
  }
  
  console.log(caesarCipherEncryptor('ovmqkwtujqmfkao',51));
