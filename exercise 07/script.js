function getInteger(promptMessage) {
  do {
    let input = prompt(`${promptMessage}`);
    if (input === null || input.trim() === "") {
      alert("Bạn chưa nhập phần tử nào");
      continue;
    }
    let integer = +input;
    if (!Number.isInteger(integer)) {
      alert("Dữ liệu không hợp lệ");
      continue;
    }
    return integer;
  } while (true);
}

function sqrElement(num) {
  return num * num;
}

function findEvenNumber(num) {
  if (num % 2 === 0) {
    return num;
  }
}

let arr = [];
for (let i = 1; i <= 10; i++) {
  let element = getInteger(`Nhập phần tử thứ ${i}:`);
  arr.push(element);
}
console.log("Mảng ban đầu:", arr);

let squareArr = arr.map(sqrElement);
let evenArr = squareArr.filter(findEvenNumber);
console.log("Mảng sau khi bình phương và lọc số chẵn:", evenArr);
