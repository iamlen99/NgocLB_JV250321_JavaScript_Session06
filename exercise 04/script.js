function getPositiveInteger(arr) {
  let count = 0;
  for (let num of arr) {
    if (Number.isInteger(num) && num > 0) {
      count++;
    }
  }
  return count;
}

function getNumber(promptMessage) {
  let input;
  do {
    input = prompt(`${promptMessage}`);
    if (input === null || input.trim() === "") {
      alert("Bạn chưa nhập gì");
      continue;
    }
    if (isNaN(input)) {
      alert("Giá trị bạn nhập không hợp lệ, xin hãy nhập lại!");
      continue;
    }
    let number = +input;
    return number;
  } while (true);
}

let n;
do {
  n = getNumber("Nhập số phần tử của mảng (n>0):");
  if (!Number.isInteger(n) || n <= 0) {
    alert("Số phần tử không hợp lệ");
    continue;
  }
  break;
} while (true);

let randomArr = [];
for (let i = 1; i <= n; i++) {
  let num = getNumber(`Nhập phần tử thứ ${i}`);
  randomArr.push(num);
}

console.log("Mảng đã nhập: ", randomArr);

let count = getPositiveInteger(randomArr);
if (count === 0) {
  console.log("Không có số nguyên dương trong mảng");
} else {
  console.log(`Mảng đã nhập có ${count} số nguyên dương`);
}
