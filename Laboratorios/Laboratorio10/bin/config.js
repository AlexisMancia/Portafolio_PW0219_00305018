const Mongoose = require("mongoose");
let database = "RegisterDB"
let host = "localhost"
let port = "27017"
let uri = `mongodb://${host}:${port}/${database}`

const connect = ()=>{
    Mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>{
        console.log(`Conexion a la base ${database} exitosa`);
    })
    .catch(()=>{
        console.log(`un error ha ocurrido al conectar comn la base de datos`);
        
    });
};

module.exports = {
    connect
}