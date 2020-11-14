// 1a.) Determine the Big O for the following algorithm:

//      You are sitting in a room with 15 people. You want
//      to find a playmate for your dog, preferably of the 
//      same breed. So you want to know if anyone out of the 
//      15 people have the same breed as your dog. You stand 
//      up and yell out, who here has a golden retriever and 
//      would like to be a playdate for my golden. 
//      Someone yells - "I do, be happy to bring him over"

// 1a Answer.) The Time complexity of this word problem would be constant time,
//             O(1), because one call is made.

// 1b.) Determine the Big O for the following algorithm: 

//      You are sitting in a room with 15 people. You want 
//      to find a playmate for your dog who is of the same breed. 
//      So you want to know if anyone out of the 15 people have 
//      the same breed as your dog. You start with the first 
//      person and ask him if he has a golden retriever. He says 
//      no, then you ask the next person, and the next, and the 
//      next until you find someone who has a golden or there 
//      is no one else to ask.

// 1b Answer.) The time complexity of this word problem would be linear time,
//             O(n), because the call is looped through for each person in the
//             room, until a match is made or all of the people have been asked.

// 2.)(Even or Odd) what is the Big O of the following algorithm:

// function isEven(value) {
//     if (value % 2 === 0) {
//         return true;
//     }
//     else
//         return false;
//     }

// 2 Answer.) The time complexity of this algorithm is constant time, 
//            O(1), because only one call is made.

// 3.)(Are you here?) what is the Big O of the following algorithm:

// function areYouHere(arr1, arr2) {
//     for (let i = 0; i < arr1.length; i++) {
//         const el1 = arr1[i];
//         for (let j = 0; j < arr2.length; j++) {
//             const el2 = arr2[j];
//             if (el1 === el2) return true;
//         }
//     }
//     return false;
// }

// 3 Answer.) The time complexity for this algorithm is polynomial time,
//            O(n^k), due to the nested for loop.

// 4.)(Doubler) What is the Big O of the following algorithm:

// function doubleArrayValues(array) {
//     for (let i = 0; i < array.length; i++) {
//         array[i] *= 2;
//     }
//     return array;
// }

// 4 Answer.) The time complexity of this algorithm is linear time,
//            O(n), because the for loop runs the entire length of the
//            array.

// 5.)(Naive Search) What is the Big O of the following algorithm:

// function naiveSearch(array, item) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === item) {
//             return i;
//         }
//     }
// }

// 5 Answer.) The time complexity of this algorithm is linear time,
//            O(n), because the for loop runs the entire length of the
//            array.

// 6.)(Creating pairs) What is the Big O of the following algorithm:

// function createPairs(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             console.log(arr[i] + ", " + arr[j]);
//         }
//     }
// }

// 6 Answer.) The time complexity for this algorithm is polynomial time,
//            O(n^k), due to the nested for loop.

// 7.)(Compute the sequence) What does the following algorithm do? 
//                           What is its runtime complexity?

// function compute(num) {
//     let result = [];
//     for (let i = 1; i <= num; i++) {

//         if (i === 1) {
//             result.push(0);
//         }
//         else if (i === 2) {
//             result.push(1);
//         }
//         else {
//             result.push(result[i - 2] + result[i - 3]);
//         }
//     }
//     return result;
// }

// 7a Answer.) This algorithm computes the fibonnaci sequence to an 'nth' placement,
//             based on the number provided. each time the number runs through
//             the for loop, its  value is checked, and pushed to the results array.
//             then the results are returned.

// 7b Answer.) The time complexity of this algorithm is linear time,
//             O(n), because the for loop runs until the selected number
//             is reached.

// 8.)(An efficient search) What is the Big O of the following algorithm:

// function efficientSearch(array, item) {
//     let minIndex = 0;
//     let maxIndex = array.length - 1;
//     let currentIndex;
//     let currentElement;

//     while (minIndex <= maxIndex) {
//         currentIndex = Math.floor((minIndex + maxIndex) / 2);
//         currentElement = array[currentIndex];

//         if (currentElement < item) {
//             minIndex = currentIndex + 1;
//         }
//         else if (currentElement > item) {
//             maxIndex = currentIndex - 1;
//         }
//         else {
//             return currentIndex;
//         }
//     }
//     return -1;
// }

// 8 Answer.) The time complexity of this algorithm is logartihmic time, O(log(n)),
//            because the array is cut in half each time the algorithm runs.

// 9.)(Random Element) What is the Big O of the following algorithm:

// function findRandomElement(arr) {
//     return arr[Math.floor(Math.random() * arr.length)];
// }

// 9 Answer.) The time complexity of this algorithm is O(1), as only
//            a single operation is performed within the function.

// 10.)(What Am I?) What does the following algorithm do? 
//                  What is its runtime complexity?

// function isWhat(num) {
//     if (num < 2 || num % 1 !== 0) {
//         return false;
//     }
//     for (let i = 2; i < num; ++i) {
//         if (num % i === 0) return false;
//     }
//     return true;
// }

// 10a Answer.) This algorithm checks to see if the input is not a prime number.

// 10b Answer.) The time complexity of this algorithm is linear time, O(n), because
//              the algorithm runs as long as i < num.

// 11.)(Tower of Hanoi)