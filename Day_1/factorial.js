function find_Factorial() {
  let num = 6;
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact = fact * i;
  }
  console.log(fact);
}
module.exports = find_Factorial;
