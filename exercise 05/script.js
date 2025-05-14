function isPalindrome(str) {
  // let reverseStr = str.split("").reverse().join("");

  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str.slice(i, i + 1);
  }
  if (reverseStr === str) {
    return true;
  }
  return false;
}

let string = null;

do {
  string = prompt("Nhập chuỗi ký tự bất kì:");
  if (string === null || string.trim() === "") {
    alert("Bạn chưa nhập gì");
    continue;
  }
  break;
} while (true);

if (isPalindrome(string)) {
  console.log("Là chuỗi đối xứng");
} else {
  console.log("Không phải chuỗi đối xứng");
}
