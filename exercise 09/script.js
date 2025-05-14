function getPositiveInteger(promptMessage, minValue = -Infinity) {
  let input;
  do {
    input = prompt(`${promptMessage}`);
    if (input === null || input.trim() === "") {
      alert("Bạn chưa nhập gì cả");
      continue;
    }
    let number = +input;
    if (!Number.isInteger(number) || number <= minValue) {
      alert("Giá trị bạn nhập không hợp lệ");
      continue;
    }
    return number;
  } while (true);
}

function splitArray(arr, n) {
  let splitArray = [];
  // let child = [];
  // let newArray = arr;
  // for (let i = 0; i < Math.ceil(arr.length / n); i++) {
  //   if (i === Math.ceil(arr.length / n) - 1) {
  //     child = newArray;
  //     splitArray.push(child);
  //     break;
  //   }
  //   child = newArray.slice(0, n);
  //   splitArray.push(child);
  //   newArray = newArray.slice(n);
  // }

  for (let i = 0; i < arr.length; i += n) {
    splitArray.push(arr.slice(i, i + n));
  }
  return splitArray;
}

// B1: Nhập vào 1 mảng
let elementQuantity = getPositiveInteger(
  "Nhập số phần tử của mảng (số phần tử phải lớn hơn 1):",
  1
);
let array = [];
for (let i = 1; i <= elementQuantity; i++) {
  let element = getPositiveInteger(`Nhập phần tử thứ ${i}`);
  array.push(element);
}
console.log("Mảng ban đầu: ", array);

// B2: Nhập n tùy chọn (n>0)
let n;
do {
  n = getPositiveInteger("Nhập kích thước mảng con:", 0);
  if (n >= elementQuantity) {
    alert("Kích thước mảng con phải nhỏ hơn số phần tử của mảng.");
    continue;
  }
  break;
} while (true);

// B3: Viết hàm
let newArray = splitArray(array, n);
console.log("Mảng mới sau khi chia thành các mảng con: ", newArray);
