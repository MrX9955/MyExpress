// api/server.js
const app = require("../server");

// Export a handler that delegates requests to the Express app
module.exports = (req, res) => app(req, res);
