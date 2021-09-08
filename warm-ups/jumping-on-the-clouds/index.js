'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'jumpingOnClouds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY c as parameter.
 */

function jumpingOnClouds(c) {
    // Write your code here
    const totalClouds = c.length;
    const thunderheads = c.filter(thunderhead => thunderhead === 1).length;
    let cloudPack = [];
    const cloudsPackage = [];
    const minJumps = [];
    for (let i = 0; i < totalClouds; i++) {
        if (c[i] === 1) {
            if (cloudPack.length !== 0) cloudsPackage.push(cloudPack);
            cloudPack = [];
        } else {
            cloudPack.push(c[i]);
            if (totalClouds === i+1) cloudsPackage.push(cloudPack);
        }
    }
    console.log(cloudsPackage)
    let sum = thunderheads;
    for (const pack of cloudsPackage) {
        console.log(pack)
        if (pack.length > 1) {
            sum += (Math.floor(pack.length/2))
        }
    }
    return sum
    
    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const c = readLine().replace(/\s+$/g, '').split(' ').map(cTemp => parseInt(cTemp, 10));

    const result = jumpingOnClouds(c);

    ws.write(result + '\n');

    ws.end();
}
