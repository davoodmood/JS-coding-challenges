function processData(input) {
    const lines = input.split('\n');
    let n = Number(lines[0]);
    let arr = lines[1].split(' ');

    let ordered = {};

    for(let i = 0; i < arr.length; i++) {
        if(ordered[arr[i]] === undefined) {
            ordered[arr[i]] = 1;
        }
        else {
            ordered[arr[i]]++;
        }
    }

    let keys = Object.keys(ordered);

    let sum = 0;
    for(let i = 0; i < keys.length; i++) {
        sum += Math.floor(ordered[keys[i]] / 2);
    }

    console.log(sum);

}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
