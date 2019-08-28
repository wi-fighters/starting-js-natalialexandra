/*
The Lifetime Supply Calculator

Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

    Write a function named calculateSupply that:
        takes 2 arguments: age, amount per day.
        calculates the amount consumed for rest of the life (based on a constant max age).
        outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
    Call that function three times, passing in different values each time.
    Bonus: Accept floating point values for amount per day, and round the result to a round number.
*/

/**
 *
 * @param {number} age
 * @param {number} amountPerDay
 * @returns {string} message
 * @example
 *    calculateSupply(50, 5)
 */
function calculateSupply(age, amountPerDay) {
  const maxAge = 100;
  let consumAmount = (maxAge - age) * (amountPerDay * 365);
  return `You will need ${consumAmount} to last you until the ripe old age of ${age}`;
}
console.log(calculateSupply(50, 5));
console.log(calculateSupply(20, 10));
console.log(calculateSupply(30, 2));
