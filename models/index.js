const mongoose = require("mongoose");
mongoose.set('debug', true);
mongoose.Promise=Promise;
mongoose.connect("mongodb+srv://rajat456bansal:Rajat%401705@cluster0-w5iyn.mongodb.net/warbler?retryWrites=true&w=majority", { useNewUrlParser: true, keepAlive:true, useUnifiedTopology: true});
module.exports.User=require("./user");
module.exports.Message=require("./message");