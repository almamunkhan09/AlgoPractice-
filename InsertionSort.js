const insertionSort = array =>{


    for (let i =1;i<array.length;i++){

        let temp = array[i];
        let currentPosition  = i;
        let j = i;
        while(!(j<0)){

            if(temp<array[j-1]){
                array[j] = array[j-1];
            }
            
            else break;

            j-=1;
            

        }
        currentPosition = j;
        array[currentPosition] = temp;
        

    }

    return array;

    
    
}

console.log(insertionSort([4,2,1,5,1,2,7,8,9,10]));