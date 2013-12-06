/**
 * Created by alexander on 05.12.13.
 */


/**
 * @param {number} n Input number
 * @return {string}
 */
var num = function(n) {
  var max = 0;
  var min = 9;
  if (typeof(n) == 'number') {
    n = Math.abs(n);
    while (n > 0) {
      if (n % 10 < min) {
        min = n % 10;
      }
      if (n % 10 > max) {
        max = n % 10;
      }
      n = Math.floor(n / 10);
    }
    return 'Наименьшая цифра: ' + min + '\n'
    + 'Наибольшая цифра: ' + max;
  } else {
    console.log('Должно быть только число');
  }
}
console.log(num(-65747));
