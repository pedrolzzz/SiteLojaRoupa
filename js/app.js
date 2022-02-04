const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

//Static Files
app.use(express.static("/html-css"))
app.use('/img',express.static(__dirname + '/img'))
app.use('/css',express.static(__dirname + '/css'))


router.get('/',function(req,res){
    res.sendFile(path.join(__dirname +'/index.html'));
})


app.use('/',router);
app.listen(process.env.port || 3000);
console.log("Servidor Rodando");
