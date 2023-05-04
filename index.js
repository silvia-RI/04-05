/*const sistemasOperativos = require('./sistemaOperativo');
const path = require('path')
console.log(path.extname('C:Users/silvi/Desktop/node/Node'));
*/

/*let apellidos = 'Rubio Izquierdo';
let nombre = 'Silvia';
let sexo = 'Femenino';
let nacionalidad ='Española';
let nacimiento = '14/09/1992';
let soporte  = 'BND 139672';
let validez = '12/11/2025';
let domicilio = 'calle moratilla de henares';
let lugar = 'Mostoles Madrid';
let padres = 'Teodoro / Lourdes';
let dni = '47543595P'
let stringDni = "Apellidos:"+apellidos+"\nNombre:"+nombre+"\n Sexo:"+sexo+"\nNacionalidad:"+nacionalidad+"\nNacimiento:"+nacimiento+"\nSoporte:"+soporte+"\nValidez:"+validez+"\nDomicilio:"+domicilio+"\nLugar:"+lugar+"\nPadres:"+padres+"\nDni:"+dni;

const fs = require('node:fs');
fs.writeFile('./texto.txt',stringDni,function (err){
    if (err){
        console.log(err);
    }
    console.log('Archivo Creado');
});*/








/////////CLASE 04-05-2023////////////

//como hacer un servidor web

/*const http = require("http");
//req res, peticion y respuesta
http.createServer(function(req,res){
    res.writeHead(200,{"Content-type": "text/html"});
    res.write('<h1>bienvenidos a pagina de NodeJs </h1>');
    res.end();

}).listen(3000);*/





/*const http = require("http");
const server = http.createServer();
server.listen(3000,function(){
    console.log('Estamos en los años 3000');
})*/

////////////colors/////////
const colors = require('colors');
console.log('Santi'.green);

