// global array to store band names
let storeBandNames = [];

// 3 refactoring
function capitalizeColor(clothingColor) {
  let color =
    clothingColor[0].toUpperCase() + clothingColor.substring(1).toLowerCase();
  return color;
}

function capitalizeFood(lastFoodEaten) {
  let food =
    lastFoodEaten[0].toUpperCase() + lastFoodEaten.substring(1).toLowerCase();
  return food;
}

function generateBandName(clothingColor, lastFoodEaten) {
  let color = capitalizeColor(clothingColor);
  let food = capitalizeFood(lastFoodEaten);
  //makeTasty(color);
  /*
  if (color === makeTasty(color)) {
    console.log(makeTasty(color));
    //return `The ${makeTasty(clothingColor)} ${food}`;
  } else {
    console.log(`The ${color} ${food}`);
    //return `The ${color} ${food}`;
  }
  */
  return `The ${color} ${food}`;
}
// call and push result to an array
storeBandNames.push(generateBandName("blue", "bAnana"));
storeBandNames.push(generateBandName("green", "apple"));
storeBandNames.push(generateBandName("Black", "cookies"));
storeBandNames.push(generateBandName("Yellow", "spaghetti"));

// print array with all results of band name
console.log(storeBandNames);

// 4 refactoring - add new function makeTasty
function makeTasty(color) {
  const colorInitial = color[0].toUpperCase();
  const colorRest = color.substr(1).toLowerCase();
  const colors = colorInitial.concat(colorRest);

  //return color;
  switch (colors) {
    case "Red":
      return "Chilli";
      break;
    case "Orange":
      return "Tangerine";
      break;
    case "Yellow":
      return "Pineapple";
      break;
    case "Green":
      return "Sage";
      break;
    case "Blue":
      return "Blueberry";
      break;
    case "Purple":
      return "Plum";
      break;
    default:
      return "";
  }
}
