const CustomError = require("../extensions/custom-error");

module.exports = function countCats(m) {
  count = 0;
  m.forEach(el => {
    el.forEach(item => {
      if (item == "^^") {
        count+=1;
      }
    })
  });
  return count;
};
