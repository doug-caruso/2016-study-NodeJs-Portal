//Modelo em Classe
function NoticiasDAO(connection){
    this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function(callback){
    this._connection.query('select * from noticias order by data_criacao desc', callback);
}

NoticiasDAO.prototype.getNoticia = function(id, callback){
    this._connection.query('select * from noticias where id_noticia = ' + id.id_noticia, callback);
}
    
NoticiasDAO.prototype.salvarNoticia = function(noticia, callback){
    this._connection.query('insert into noticias set ?', noticia, callback);
}

NoticiasDAO.prototype.get5UltimasNoticias = function(callback){
    this._connection.query('select * from noticias order by data_criacao desc limit 5', callback)
}

module.exports = function(){
    return NoticiasDAO;
}


/* Sem modelo em Classe
module.exports = function(){
    this.getNoticias = function(connection, callback){
        connection.query('select * from noticias', callback);
    }

    this.getNoticia = function(connection, callback){
        connection.query('select * from noticias where id_noticia = 2', callback);
    }
    
    this.salvarNoticia = function(connection, noticia, callback){
        connection.query('insert into noticias set ?', noticia, callback);
    }

    return this;
}*/