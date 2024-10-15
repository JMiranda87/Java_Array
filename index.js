// Example 1: Access Array Elements
function arrayDemoOne() {
  // create an array
  const age = [12, 4, 5, 2, 5];
  // access each array element
  console.log("Accessing Elements of an Array:");
  console.log("First Element: " + age[0]);
  console.log("Second Element: " + age[1]);
  console.log("Third Element: " + age[2]);
  console.log("Fourth Element: " + age[3]);
  console.log("Fifth Element: " + age[4]);
}

// Example 2: Using for Loop
function arrayDemoTwo() {
  // create an array
  const age = [12, 4, 5];

  // loop through the array
  // using for loop
  console.log("Using for Loop:");
  for (let i = 0; i < age.length; i++) {
    console.log(age[i]);
  }
}

// Example 3: Iterating Over an Array using Enhanced For Loop (forEach in JavaScript)
function enhancedForLoop() {
  const names = ["New York", "Dallas", "Las Vegas", "Florida"];
  names.forEach(name => {
    console.log(name);
  });
}

// Example 4: Compute the Sum and Average of Array Elements
function arrayDemoThree() {
  const numbers = [2, -9, 0, 5, 12, -25, 22, 9, 8, 12];
  let sum = 0;
  let average;

  // access all elements using forEach loop
  // add each element to sum
  numbers.forEach(number => {
    sum += number;
  });

  // get the total number of elements
  const arrayLength = numbers.length;

  // calculate the average
  average = sum / arrayLength;

  console.log("Sum = " + sum);
  console.log("Average = " + average.toFixed(2));
}

// Example 5: Mean and Standard Deviation
function meanSDArray() {
  const marks = [74, 43, 58, 60, 90, 64, 70];
  let sum = 0;
  let sumSq = 0;
  let mean, stdDev;

  // Compute sum and square-sum using loop
  marks.forEach(mark => {
    sum += mark;
    sumSq += mark * mark;
  });

  mean = sum / marks.length;
  stdDev = Math.sqrt(sumSq / marks.length - mean * mean);

  // Print results
  console.log(`Mean is: ${mean.toFixed(2)}`);
  console.log(`Standard deviation is: ${stdDev.toFixed(2)}`);
}

// Example 6: Insert an Element at the end of an Array
function insertElements() {
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  let arr = [];

  function getInput(count) {
    if (count === 10) {
      readline.question('Enter an Element to Insert: ', (element) => {
        arr.push(parseInt(element));
        console.log("\nNow the new array is: ");
        console.log(arr.join(' '));
        readline.close();
      });
    } else {
      readline.question(`Enter element ${count + 1}: `, (input) => {
        arr.push(parseInt(input));
        getInput(count + 1);
      });
    }
  }

  console.log("Enter 10 Elements:");
  getInput(0);
}

// Run all examples
console.log("Example 1:");
arrayDemoOne();

console.log("\nExample 2:");
arrayDemoTwo();

console.log("\nExample 3:");
enhancedForLoop();

console.log("\nExample 4:");
arrayDemoThree();

console.log("\nExample 5:");
meanSDArray();

console.log("\nExample 6:");
insertElements();