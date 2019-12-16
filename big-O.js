// 1. Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog who is of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You start with the first person and ask him if he has a golden retriever. He says no, then you ask the next person, and the next, and the next until you find someone who has a golden or there is no one else to ask.

// Since you are looping through each person, the time will be directly proportional to the number of people. This will have a time complexity of Linea, or O(n).

// 2. Big O of this function:

function isEven(value) {
  if (value % 2 == 0) {
    return true;
  } // constant one execution
  else return false;
} // constant one execution

// This should have have a time complexity of O(1), as no matter the size of the input, the calculation is still either true or false...

// 3. function areYouHere(arr1, arr2) {
//     for (let i = 0; i < arr1.length; i++) { // One loop
//         const el1 = arr1[i];
//         for (let j = 0; j < arr2.length; j++) { // Two loops
//             const el2 = arr2[j];
//             if (el1 === el2) return true;
//         }
//     }
//     return false;
// }

// O(n^k), nexted loops, the time complexity is heavily dependant on the number of inputs, the more inputs, the longer the time to execute the function.

// // 4. function doubleArrayValues(array) {
//     for (let i = 0; i < array.length; i++) { // Looping through the array once,
//         array[i] *= 2; // Changing the value at each location of the array, this would be a constant
//     }
//     return array; // Constant
// }

// So the for loop is the longest time complexity, but only one for loops, think this would be O(n), where the input is directly proportional to the time it takes to execute the code.

// 5.

function naiveSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    // One loop, linear...
    if (array[i] === item) {
      // checking each, constant
      return i; // constant
    }
  }
}

// I think this is also still O(n), where there are two constant executions, but still one loop that is linearly related to the size of the input.

// 6.

function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    // Linear
    for (let j = i + 1; j < arr.length; j++) {
      // secondary linear increasing complexity
      console.log(arr[i] + ", " + arr[j]); // constant
    }
  }
}

// This would have O(n^k) where complexity is dependant on the size of the input with nested loops, increaseing the dependency.

// 7.

function compute(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {
    // Creating a loop depending on the size of the integer of n...

    if (i === 1) {
      result.push(0);
    } else if (i == 2) {
      result.push(1);
    } else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  return result;
}

// console.log(compute(7));

//  *** Unsure - So this is creating a loop that iterates depending on how large num is. Then, iterating through the self created loop, performing constant executions to push to the array. Unclear about this one, becuase as the actual size of the interger grows, there are more items in the array to push, but the number of overall inputs will never grow. I think this must be Linear, O(n).

// 8 .

function efficientSearch(array, item) {
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let currentIndex;
  let currentElement;

  while (minIndex <= maxIndex) {
    currentIndex = Math.floor((minIndex + maxIndex) / 2);
    currentElement = array[currentIndex];

    if (currentElement < item) {
      minIndex = currentIndex + 1;
    } else if (currentElement > item) {
      maxIndex = currentIndex - 1;
    } else {
      return currentIndex;
    }
  }
  return -1;
}

// O(log n) - This function is still cutting the number of input in half each time it is executed, so the time complexity doesn't grow as fast as a linear search.

// 9.
function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// This is O(1), does not increase the time complexity depending on the size of the array, it's just one executable line of code.

// 10.
function isWhat(n) {
  if (n < 2 || n % 1 != 0) {
    return false; // If n not greater than or equal to 1
  }
  for (let i = 2; i < n; ++i) {
    // n > 2
    if (n % i == 0) return false; // if even number return false?
  }
  return true;
}
// I think this function is trying to see if the number is greater than one, greater than 2, and if it's even, so it's trying to see if the number is odd. I would say O(n), beucase as n increases, so does the number of loops

// 11.

// 12.
// a.
const sheepCounter = num => {
  for (let i = 0; i < num; i++) {
    console.log("Another sheep jumps over the fence");
  }
  console.log("All sheep have jumped over the fence");
};
// b.
const powerCalculator = (int, exp) => {
  // base case
  if (exp < 0) {
    console.log("Exponent should be >= 0");
  }

  // general case
  console.log(int ** exp);
};

// c.
const reverse = string => {
  let reversedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  return reversedString;
};

// d.
const triNum = n => {
  let total = 0;
  for (let i = n; i >= 0; i--) {
    total += i;
  }
  return total;
};

// console.log(triNum(3));

// e.
const splitter = string => {
  const myArray = string.split("/");
  return myArray;
};

// console.log(splitter("02/20/2020"));

// f.
const fib = num => {
  let sequence = [0, 1];
  for (let i = 2; i <= num; i++) {
    sequence[i] = sequence[i - 2] + sequence[i - 1];
  }
  return sequence;
};

// console.log(fib(7));

// g.
const factorial = num => {
  let total = 1;
  for (let i = num; i >= 1; i--) {
    total = total * i;
  }
  return total;
};

// console.log(factorial(5));

// 13 and 14
// a.
// Recursive: O(n) as input increases, so does the time complexity.
// Iterative:  O(n) as input increases, so does the time complexity.

// b.
// Recursive: Unclear...
// Iterative:

// c.
// Recursive: O(n) larger the string, the more calls.
// Iterative: O(n), same

// d.
// Recursive: O(n^2) I think, because the larger n, many more calls?
// Iterative: O(n), iteration depends on size of n

// e.
// Recursive: O(n)?
// Iterative: O(n)?

// f.
// Recursive: O(n)....?
// Iterative: O(n)...?

// g.
// Recursive:
// Iterative:
