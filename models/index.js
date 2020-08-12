const mongoose = require("mongoose");
mongoose.set('debug', true);
mongoose.Promise=Promise;
mongoose.connect("mongodb+srv://rajat456bansal:Rajat@1705@cluster0-w5iyn.mongodb.net/warbler?retryWrites=true&w=majority", {
    keepAlive:true
});

module.exports.User=require("./user");
module.exports.Message=require("./message");