//Finding the maximum or minimum of tandem cycle paired by Red and Blue Shirt pair.


function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
    // Write your code here.
      let speed = 0;
      
      redShirtSpeeds.sort(function(a,b){return a-b});
      
      if (fastest === true){
          blueShirtSpeeds.sort(function(a,b){return b-a});
        }
    
      else blueShirtSpeeds.sort(function(a,b){return a -b});
    

      for (let i=0;i<redShirtSpeeds.length;i++){

        speed+= Math.max(redShirtSpeeds[i],blueShirtSpeeds[i]);
        

      }
      

      return speed;

      
      
    
  }

  let red = [2,3,4,5,2,4];
  let blue = [4,6,7,8,2,3];

  console.log(tandemBicycle(red,blue,false));
  