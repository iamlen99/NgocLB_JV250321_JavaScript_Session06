function capitalizeFirstLetter(str) {
  let eachWordArr = str.trim().split(" ");
  for (let i = 0; i < eachWordArr.length; i++) {
    eachWordArr[i] =
      eachWordArr[i].slice(0, 1).toUpperCase() +
      eachWordArr[i].slice(1).toLowerCase();
  }

  return eachWordArr.join(" ");
}

let string;
do {
  string = prompt("Nhập chuỗi bất kì: ");
  if (string === null || string.trim() === "") {
    alert("Bạn chưa nhập gì hoặc đã nhập chuỗi rỗng, hãy nhập lại");
    continue;
  }
  break;
} while (true);

console.log(string.trim().split(" "));
console.log(capitalizeFirstLetter(string));
