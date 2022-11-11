const {myFunction} = require("./index");

(async () => {
  const fn = myFunction();

  await fn();
})();


