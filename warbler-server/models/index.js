const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/warbler", {
  keepAlive: true
});


// make sure to export out message
module.exports.User = require("./user");
module.exports.Message = require("./message");
