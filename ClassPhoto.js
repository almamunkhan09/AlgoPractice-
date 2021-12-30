function classPhotos(redShirtHeights, blueShirtHeights) {
    redShirtHeights.sort((a,b)=>a-b);
    blueShirtHeights.sort((a,b)=>a-b);
    let result = true;

    

    //blueshirt  is at the back 

    for (let i = 0; i<blueShirtHeights.length;i++){
        if (redShirtHeights[i]>blueShirtHeights[i] || redShirtHeights[i]===blueShirtHeights[i]){
            
            result = false;
            break;
        }
    }
    
    // if we set the redshirt at the back 
    if (result ===false){
        result = true;

        for (let i = 0; i<blueShirtHeights.length;i++){
            if (redShirtHeights[i]< blueShirtHeights[i] || redShirtHeights[i]===blueShirtHeights[i]){
                
                result = false;
                break;
            }
        }


    }
    
    return result;
  }



  let blueShirtHeights = [5, 8, 1, 3, 4];
  let redShirtHeights =  [6, 9, 2, 4, 5];

  

  console.log(classPhotos(redShirtHeights,blueShirtHeights));


  