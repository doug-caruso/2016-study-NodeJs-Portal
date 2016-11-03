var express = require ('express');
var app = express();

app.get('/', function(req, res){
    res.send("<html><body>Portal de Noticias</html></body>");
});

app.get('/tecnologia', function(req, res){
    res.send("<html><body>Noticias de Tecnologia</html></body>");
});

app.listen(3000, function(){

})