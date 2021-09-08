// const arr = [1,3,5,2,4,6,7];
// const arr = [2,3,4,1,5];
const arr = [2,31,1,38,29,5,44,6,12,18,39,9,48,49,13,11,7,27,14,33,50,21,46,23,15,26,8,47,40,3,32,22,34,42,16,41,24,10,4,28,36,30,37,35,20,17,45,43,25,19]
// const array = arr.concat()
let swap = 0;
for (let i = 0; i < arr.length; i++) {
    const currentNumber = arr[i];
    const position = i + 1
    if (currentNumber !== position) {
        let indexToSwap;
        for (let j=0; j < arr.length; j++) {
            if (arr[j] === position) {
                indexToSwap = j;
                break
            }
        }
        arr[i] = position;
        arr[indexToSwap] = currentNumber;
        swap++
    }
}
console.log("Swap Count", swap);
// original.sort((a,b) => a - b);
// console.log(arr.filter((el)=> el = ))
// let count = 0;

// let indices = [];


// for (index in arr) {
//     if (arr[index] !== original[index]) {
//         // count++;
//         indices.push(parseInt(index));
//     }
//     // console.log("arr array: ", arr[index]);
//     // console.log("original array: ", original[index]);
//     // console.log(count)
// }

// for (let i = 0; i < indices.length; i++) {
//     const arrPlaceholder = indices[i] + 1
//     for (const indice of indices) {
//         if (indice === indices[i]) continue
//         if (indice === arrPlaceholder) {
//             swap++
//             break
//         }
//     }
// }

// console.log("ordered array: ", original);
// console.log("indices array: ", indices);
// console.log("counts: ", count);


// console.log("minSwaps: ", (count - (arr.length - count)))

// UNFINISHED