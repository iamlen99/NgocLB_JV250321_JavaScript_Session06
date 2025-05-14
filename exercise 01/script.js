let firstNumber = +prompt("Nhập số nguyên thứ nhất");
let secondNumber = +prompt("Nhập số nguyên thứ hai");

if (!Number.isInteger(firstNumber) || !Number.isInteger(secondNumber)) {
  console.log("Dữ liệu không hợp lệ");
} else {
  console.log(
    `Tổng của ${firstNumber} và ${secondNumber} là ${sum(
      firstNumber,
      secondNumber
    )}`
  );
}
function sum(a, b) {
  return a + b;
}
