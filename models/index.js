const mongoose = require("mongoose");
mongoose.set('debug', true);
mongoose.Promise=Promise;
mongoose.connect("mongodb+srv://rajat456bansal:****@cluster0-w5iyn.mongodb.net/warbler?retryWrites=true&w=majority", { useNewUrlParser: true, keepAlive:true, useUnifiedTopology: true});
module.exports.User=require("./user");
module.exports.Message=require("./message");
