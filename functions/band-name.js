function bandName(color, food) {
  let capitalizeColor = color[0].toUpperCase() + color.substring(1);
  let capitalFood = food[0].toUpperCase() + food.substring(1);
  return `The ${capitalizeColor} ${capitalFood}`;
}
console.log(bandName("blue", "banana"));
