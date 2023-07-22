// @ts-nocheck
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  let five = 0
  let ten = 0
  for (let v of bills) {
    if (v === 5) {
      five++
    } else if (v === 10) {
      five--
      ten++
    } else if (ten) { // v等于20 且 ten有值
      five--
      ten--
    } else { // v等于20 且 ten没有值
      five -= 3
    }

    if (five < 0) {
      return false
    }
  }
  return true
}

const bills1 = [5,5,5,10,20]
console.log(lemonadeChange(bills1))
// const bills2 = [5,5,10,10,20]
// console.log(lemonadeChange(bills2))