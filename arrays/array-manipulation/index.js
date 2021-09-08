const n = 10;
const queries = [[2,6,8], [3,5,7],[1,8,1],[5,9,15]];

const _blank_init_array = new Array(n + 1).fill(0);

for (let i= 0; i < queries.length; i++) {
    const a = queries[i][0];
    const b = queries[i][1];
    const k = queries[i][2];
    _blank_init_array[a - 1] += k;
    _blank_init_array[b] -= k;
}
let sum = 0;
let topInt = 0;
_blank_init_array.forEach(value => {
    sum += value;
    topInt = Math.max(sum, topInt);
})
console.log(topInt);

// // Second Try - Correct but still naive, requires performance Optimisation
// const _blank_init_array = [];
// _blank_init_array.length = n; 
// _blank_init_array.fill(0);

// for (let i= 0; i < queries.length; i++) {
//     for (let j = queries[i][0] - 1; j < queries[i][1]; j++) {
//         _blank_init_array[j] += queries[i][2];
//     }
// }
// const topInt = Math.max(..._blank_init_array);
// console.log(topInt);



// // First Try - Correct but requires performance Optimisation
// for (let i=0; i< _blank_init_array.length; i++) {
//     _blank_init_array[i] = 0
// }
// console.log("Blank Array",_blank_init_array)
// const _array_a = new Array; 
// const _array_b = new Array; 
// const _array_k = new Array;
// for (let index = 0; index < queries.length; index++) {
//     _array_a.push(queries[index][0])
//     _array_b.push(queries[index][1])
//     _array_k.push(queries[index][2])
// }
// console.log("_array_a",_array_a)
// console.log("_array_b",_array_b)
// console.log("_array_k",_array_k)

// for (let i= 0; i < queries.length; i++) {
//     // const diff = (_array_b[i] - _array_a[i]) + 1;
//     for (let j = _array_a[i] - 1; j < _array_b[i]; j++) {
//         _blank_init_array[j] += _array_k[i];
//     }
//     console.log(`Filled Array - Round ${i + 1}`,_blank_init_array)
// }
// const topValue = Math.max(..._blank_init_array);
// console.log(topValue);