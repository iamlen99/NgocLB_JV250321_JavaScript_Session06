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

function isPrime(num) {
  if (num < 2) {
    return false;
  } else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
  }
  return true;
}

let arr = [];
for (let i = 1; i <= 10; i++) {
  let element = getInteger(`Nhập phần tử thứ ${i}:`);
  arr.push(element);
}
console.log("Mảng ban đầu:", arr);

let oddPrimeArr = [];
for (let num of arr) {
  if (isPrime(num) && num !== 2) {
    oddPrimeArr.push(num);
  }
}
console.log("Mảng sau khi lọc số nguyên tố lẻ:", oddPrimeArr);
