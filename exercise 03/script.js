function isInteger(promptMessage, minValue = -Infinity) {
  let input;
  do {
    input = prompt(`${promptMessage}`);
    if (input === null || input.trim() === "") {
      alert("Bạn chưa nhập gì");
      continue;
    }
    let num = +input;
    if (!Number.isInteger(num) || num < minValue) {
      alert("Giá trị bạn nhập không hợp lệ");
      continue;
    }
    return num;
  } while (true);
}

function findMax(arr) {
  let max = arr[0];
  for (let num of arr) {
    if (max < num) {
      max = num;
    }
  }
  return max;
}

let n = isInteger("Nhập số phần tử của mảng (n>0):", 1);

let arr = [];

for (let i = 1; i <= n; i++) {
  let num = isInteger(`Nhập phần tử thứ ${i}`);
  arr.push(num);
}

console.log("Mảng đã nhập: ", arr);

let max = findMax(arr);
console.log(`Số lớn nhất của mảng số nguyên đã nhập là: ${max}`);
