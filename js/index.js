function gestionPromesa(exito, error){
    setTimeout(exito, 1000, 'ITLA');
}

function crearPromesa(){
    return new Promise(gestionPromesa);
}

function pruebaPromesa(){
    crearPromesa().then(function(resultado){
        document.getElementById('contenedor').innerHTML = resultado;
    });
}

function obtenerDatos(){
    fetch('http://www.raydelto.org/json.php').
    then(function(resultado){
        return resultado.json();
    }).then(function(resultado){
        document.getElementById('contenedor').innerHTML = resultado.name;
    }).catch(function(error){
        document.getElementById('contenedor').innerHTML = 'Error al solicitar recurso';
    });
}
