module.exports.formulario_inclusao_noticia = function(application, req, res){
    res.render("admin/form_add_noticia.ejs", {validacao : {}, noticia : {}});    
}

module.exports.noticias_salvar = function(application, req, res){
    var noticia = req.body;
    req.assert("titulo", "Titulo é obrigatório").notEmpty();
    req.assert("resumo", "Resumo deve conter entre 10 e 100 caracteres").len(5, 100);
    req.assert("autor", "Autor é obrigatório").notEmpty();
    req.assert("data_noticia", "Data é obrigatório").notEmpty().isDate({format: 'YYYY-MM-DD'});
    req.assert("noticia", "Noticia deve ser preenchida").notEmpty();
    
    var erro = req.validationErrors();  
    
    if(erro){
        res.render("admin/form_add_noticia.ejs", {validacao : erro, noticia : noticia});
        return;
    }     
    
    var connection = application.config.dbConnection();        

    var noticiasModel = new application.app.models.NoticiasDAO(connection);
    noticiasModel.salvarNoticia(noticia, function(error, result){
        res.redirect("/noticias");
    });
}