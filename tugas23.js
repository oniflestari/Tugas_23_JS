var arr = [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66];
var hasil = arr.filter(functionFilter);

function functionFilter(n) {
  return n > 15;
};

console.log(hasil);