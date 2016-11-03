var app = require("./config/server.js");

var rotaHome = require("./app/routes/home")(app);

app.listen(3000, function(){
    console.log("Server ON");
})