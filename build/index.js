"use strict";

var _unmockNode = require("unmock-node");

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv/config'); // Read .env


const bodyParser = require('body-parser'); // Important: port must be read from the environment for Heroku


const port = process.env.PORT || 3000;
console.log(`Listening at port ${port}`);

(async () => {
  // Use unmock for development, disabled when NODE_ENV=production
  await (0, _unmockNode.unmock)();
  const app = (0, _app.default)();
  app.listen(port);
})();
//# sourceMappingURL=index.js.map