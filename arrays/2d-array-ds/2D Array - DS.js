let arr = [
    [ 1, 1, 1, 0, 0, 0 ],
    [ 0, 1, 0, 0, 0, 0 ],
    [ 1, 1, 1, 0, 0, 0 ],
    [ 0, 0, 2, 4, 4, 0 ],
    [ 0, 0, 0, 2, 0, 0 ],
    [ 0, 0, 1, 2, 4, 0 ]
  ]
  const addresses = [];
  const values = [];
  for(let i=0; i < arr.length - 2; i++ ) {
    for(column in arr[i]) {
        if ( parseInt(column) + 1 > arr.length - 2 ) continue
        addresses.push([parseInt(column), i])
    }
  }
  for(address of addresses) {
      values.push(hourglass(address[0],address[1]));
  }
  values.sort(function(a, b) {
    return b - a;
  });
  console.log(values)
  function hourglass(x,y) {
    return parseInt(arr[y][x] + arr[y][x+1] + arr[y][x+2] + arr[y+1][x+1] + arr[y+2][x] + arr[y+2][x+1] + arr[y+2][x+2]);
  }