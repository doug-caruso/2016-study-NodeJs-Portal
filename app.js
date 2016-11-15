var app = require("./config/server.js");

var rotaHome = require("./app/routes/home")(app);
var rotaInclusao = require("./app/routes/inclusao")(app);
var rotaNoticias = require("./app/routes/noticias")(app);

app.listen(3000, function(){
    console.log("Server ON");
})