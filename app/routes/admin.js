module.exports = function(app){
    app.get('/inclusao_noticia', function(req, res){
        res.render("admin/form_add_noticia.ejs");
    });

    app.post('/noticias/salvar', function(req, res){
        
        var noticias = req.body;
        res.send(noticias.noticia);
    });
}