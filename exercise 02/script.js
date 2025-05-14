let input = prompt("Nhập số nguyên dương bất kỳ");
if (input === null) {
  console.log("Bạn đã hủy nhập");
} else if (input.trim() === "") {
  console.log("Bạn chưa nhập gì");
} else {
  let n = +input;
  if (!Number.isInteger(n) || n <= 0) {
    console.log("Dữ liệu nhập không hợp lệ");
  } else {
    if (isPrime(n)) {
      console.log(`${n} là số nguyên tố`);
    } else {
      console.log(`${n} không phải là số nguyên tố`);
    }
  }
}

function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
