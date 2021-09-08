let a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
let d = 33;

let rotatingArray;
    let rotatedArray;
    if (a.length > d) {
        rotatingArray = a.splice(d);
        console.log("rotatedArray: ", [...rotatingArray,...a]);
        rotatedArray = [...rotatingArray,...a];
    } else {
        if (d % a.length !== 0) {
            rotatingArray = a.splice(d % a.length);
            console.log("rotatedArray: ", [...rotatingArray,...a]);
            rotatedArray = [...rotatingArray,...a];
        } else {
            console.log("rotatedArray: ", a);
            rotatedArray = a;
        } 
    }
    return rotatedArray








