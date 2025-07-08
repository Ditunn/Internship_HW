function largest_Number() {
  let array = [10, 20, 30, 400, 60, 100];
  let largest = array[1];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      largest = array[i];
    }
  }
  console.log(largest);
}
module.exports = largest_Number;
