/**
 * Исправить ошибку в цикле с setTimeout:
 *
 */

for (let i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log('index', i);
  }, 3000);
}

for (var i = 0; i < 10; i++) {
  (function (iCopy) {
    setTimeout(function () {
      console.log('index', iCopy);
    }, 3000);
  })(i);
}
