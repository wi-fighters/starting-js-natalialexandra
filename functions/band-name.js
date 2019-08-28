function generateBandName(clothingColour, lastFoodEaten) {
  //capitalize first letter of color and of food
  let colorCapitalLetter1 =
    clothingColour[0].toUpperCase() + clothingColour.substring(1);
  let foodCapitalLetter1 =
    lastFoodEaten[0].toUpperCase() + lastFoodEaten.substring(1);

  // return the message
  return `The ${colorCapitalLetter1} ${foodCapitalLetter1}`;
}
console.log(bandName("blue", "banana"));
