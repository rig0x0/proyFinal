//Definir variables
const express = require('express'); //HTTP
const hbs = require('hbs'); // HTML - Dinamico
const bodyparser =  require('body-parser'); // Procesar solicitudes POST
const port = process.env.PORT || 3000; // Puerto

const app = express();
//boton de vistas - HTML dinamicos
app.set('view engine','hbs');
hbs.registerPartials(__dirname+'/views/partial',()=>{});

//Middleware - use
app.use(express.static('public'));
app.use(bodyparser.urlencoded( { extended: true } ) );
app.use(bodyparser.json());

app.get('/',(req,res)=>{
    res.render('login')
})

app.get('/productos',(req,res)=>{
    res.render('categorias')
})

app.get('/menu',(req,res)=>{
    res.render('index')
})

app.get('*',(req,res)=>{
    res.render('404');
})
//Esta parte es para el desarrollador
app.listen(port,()=>{
    console.log('El servidor expressesta corriendo  en el puerto: ', port)
})