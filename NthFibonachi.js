// This fibonachi series n=1 the fibonachi num is 0, for n =2 the fibonachi num is 1 

// for others using the recursion 


const fibo = n =>{
    
    
    if (n===2) return 1;
    else if (n<=1) return 0;
    
    
    
    return fibo(n-1)+fibo (n-2);
    
    
    
}

console.log(fibo(0));