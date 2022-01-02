function runLengthEncoding(string) {
    
    let result ="";
    const array = string.split("");
    let totalCount = 0;
    
    for (let i =0;i<array.length;i++){
        
        totalCount = 1;
        while(array[i+1] === array[i]){
            totalCount++;
            i++;
        }
        
        if (totalCount<=9){
                result+=`${totalCount}` + `${array[i]}`;
                
            }
            
        else {
                while (totalCount>9){
                    result+=`${9}` + `${array[i]}`;
                    totalCount-=9;
                }
                
               result+=`${totalCount}` + `${array[i]}`;
                
                
            }
            
        
        
        
        
        
       
        
    }
    
    
    
    
return result;    
    
  
}

console.log(runLengthEncoding("AAABBBaaaAAAaaaaaaa"));