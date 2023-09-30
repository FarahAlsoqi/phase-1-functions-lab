// Code your solution in this file!
function distanceFromHqInBlocks(value){
    return Math.abs(value-42);
}

function distanceFromHqInFeet(value) {
   const block = distanceFromHqInBlocks(value);
    return block * 264
}  

function distanceTravelledInFeet(start, destination) {
    const blocks = Math.abs(destination - start);
    return  blocks * 264
} 

function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination)
    
  if (distance <= 400) {
    return 0;}

    else if (distance <= 2000){
      const  Price = (distance - 400)  * 0.02
      return Price
    }        

    else if (distance < 2500){
       return 25;
    }
    else {
        return 'cannot travel that far';
    }

}