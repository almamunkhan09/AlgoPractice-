// Writing  a function that will sort numbers using bubble sort Algorithm


const bubbleSort = (array)=>{

    for (let k = 0; k < array.length;k++){
        for (let i = 1; i<array.length; i++){
            if(array[i]<array[i-1]){
                
                const temp = array[i-1];
                array[i-1] = array[i];
                array[i] = temp;
    
    
            }
    
        }
    }

return array;

}
const x = bubbleSort([4,3,2,1]);
console.log(x);
