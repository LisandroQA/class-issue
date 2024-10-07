const path = require("path");

/* ====================================================== */
/*                       Global App                       */
/* ====================================================== */

const App = {
  Fixture: () => require(path.join(__dirname, "fixtures")),
};

console.log(App.Fixture());
