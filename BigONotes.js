// ----| Constant Time 'O(1)' Example: |----

// function getRandomItem(array) {
//     let ticks = 0;
//     // Get a random number and access that element in the array
//     const item = array[Math.floor(Math.random() * array.length)];
//     ticks++;
//     return {
//         result: item,
//         ticks: ticks
//     };
// }
// -------------------------------------------

// ----| Logarithmic Time 'O(log(n))' Example: |----

// function howManyLessThanNitems(arr, n) {
//     let ticks = 0;
//     /* If the 1st element in the array is greater than `n`, return 0,
//        because no items in the array are less than `n`. */
//     if (!arr.length || arr[0] >= n) {
//         ticks++;
//         return 0;
//     }
// ------------------------------------------

//     let lowIndex = 0, highIndex = arr.length;

//     while (highIndex > lowIndex) {
//         // Find midpoint
//         let midIndex = Math.floor((highIndex + lowIndex) / 2);
//         /* If `midIndex` element is greater than `n`, that means all elements
//            to the right of `midIndex` are also greater than `n`, so
//            we only need to focus on elements to the left of `midIndex`.
//            We set `highIndex` to the current value of `midIndex` so next time
//            through the loop, we'll only look at the left half */
//         if (arr[midIndex] >= n) {
//             highIndex = midIndex;
//             ticks++;
//         }

//         /* If the element to the right of `midIndex` is less than `n`, then we
//            know that we need to check the items to the right of `midIndex`, so
//            we set `lowIndex` to the current value of `midIndex`, so that next
//            time through the loop we only look at the right side */
//         else if (arr[midIndex + 1] < n) {
//             lowIndex = midIndex;
//             ticks++;
//         }

//         /* Otherwise, if the element to the right of `midIndex` is greater
//            than or equal to `n`, we know that the item at `midIndex` is the last
//            item that's less than `n`, so we return `midIndex +  1` to get the total
//            number of items that are less than `n` */
//         else {
//             ticks++;
//             return {
//                 result: midIndex + 1,
//                 ticks: ticks
//             }
//         }
//     }
// }
// --------------------------------------

// ----| Linear Time 'O(n)' Example: |----

// function findMin(array){
//     let min = array[0], ticks = 1;
//     for (let i = 1; i < array.length; i++) {
//         ticks++;
//         if (array[i] < min) {
//             min = array[i];
//         }
//     }
//     return {
//         result: min,
//         ticks: ticks
//     };
// }
// ----------------------------------------

// ----| Polynomial Time 'O(n^k)' Example: |----

// function hasDuplicates(array) {
//     let ticks = 0, result = false;
//     for (let i = 0; i < array.length; i++) {
//         ticks++;
//         for (let j = 0; j < array.length; j++) {
//             ticks++;
//             if (array[i] === array[j] && i !== j) {
//                 result = true;
//             }
//         }
//     }
//     return {
//         result: result,
//         ticks: ticks
//     };
// }
// ----------------------------------------

// ----| Exponential Time 'O(2^n)' Example: |----

// function countTriangle(layers) {
//     let ticks = 1;
//     let count = 0; // the number of dots we've counted so far
//     let layer = 0; // the current layer we're on
//     let lastLayer = 1; // the number of dots we counted in the previous layer
//     while (layer < layers) {
//         ticks++;
//         let newLayer = 0; // the number of dots we've counted so far in the current layer
//         for (let i = 0; i < lastLayer; i++) {
//             ticks++;
//             newLayer += 2;
//         }
//         lastLayer = newLayer;
//         count += lastLayer;
//         layer++;
//     }
//     return {
//         result: count,
//         ticks: ticks
//     };
// }
// -----------------------------------------