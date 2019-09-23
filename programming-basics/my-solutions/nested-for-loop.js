// nested for loop

// 1 goal
console.log(`\n# 1`);
/* 
|||||
|||||
|||||
|||||
*/
let pipes = "";
for (let i = 0; i < 4; i += 1) {
  pipes = "";
  for (let j = 0; j < 5; j += 1) {
    pipes += "|";
  }
  console.log(pipes);
}

// 2 goal
console.log(`\n# 2`);
/*
-|-|-
|-|-|
-|-|-
*/
let goal2 = "";
for (let i = 0; i < 3; i += 1) {
  goal2 = "";
  for (let j = 0; j < 5; j += 1) {
    // all even or all odd
    if ((j % 2 === 0 && i % 2 === 0) || (j % 2 !== 0 && i % 2 !== 0)) {
      goal2 += "-";
    }
    // j is even & i is odd or j is odd & i is even
    else if ((j % 2 === 0 && i % 2 !== 0) || (j % 2 !== 0 && i % 2 === 0)) {
      goal2 += "|";
    }
  }
  console.log(goal2);
}

// 3 goal
console.log(`\n# 3`);
/*

*
**
***
****

*/
let goal3 = "";
for (let i = 0; i < 4; i += 1) {
  goal3 = "";
  for (let j = 0; j <= i; j += 1) {
    goal3 += "*";
  }
  console.log(goal3);
}

// 4 goal
console.log(`\n# 4`);
/*

****
***
**
*

*/
let goal4 = "";
for (let i = 0; i < 4; i += 1) {
  goal4 = "";
  for (let j = 4; j >= i; j -= 1) {
    goal4 += "*";
  }
  console.log(goal4);
}

// 5 goal
console.log("\n# 5\n");

//    *
//   * *
//  * * *
//  * * * *
// * * * * *

const pyramid = n => {
  const mid = Math.floor((2 * n - 1) / 2);
  for (let row = 0; row < n; ++row) {
    //for each row, make empty steps
    let level = "";
    for (let col = 0; col < 2 * n - 1; col++) {
      if (mid - row <= col && mid + row >= col) {
        level += "*";
      } else {
        level += " ";
      }
    }
    console.log(level);
  }
};
pyramid(5);
