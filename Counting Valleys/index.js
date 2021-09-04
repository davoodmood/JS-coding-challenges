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
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {
    // Write your code here
    if (typeof steps !== Number) {
        steps = parseInt(steps);
    }
    const pathCountSteps = path.split('');
    let seaLevel = 0;
    let valley = 0;
    let route = ''
    for (let x = 0; x < pathCountSteps.length; x++) {
        const climbState = path.charAt(x);
        if (climbState === 'U') {
            if (route.length === 0) route = 'uphill'
            seaLevel++
        } else if(climbState === 'D') {
            if (route.length === 0) route = 'downhill'
            seaLevel--
        }
        if (seaLevel === 0) {
            route === 'downhill' && valley++
            route = ''
        }
    }
    return valley
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const steps = parseInt(readLine().trim(), 10);

    const path = readLine();

    const result = countingValleys(steps, path);

    ws.write(result + '\n');

    ws.end();
}
