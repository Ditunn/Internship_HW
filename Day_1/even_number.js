function even_Number() {
  let num = [4, 6, 7, 15, 24, 44, 52, 55];
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 == 0) {
      console.log(num[i]);
    }
  }
}
module.exports = even_Number;
