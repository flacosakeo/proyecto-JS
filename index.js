//servidor estatico con express
const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
//app.get("/",(req, res) =>{
    //res.send('hola desde el serverrrrr con express');
//    res.sendFile(__dirname + '/public/index.html');
//});

const multer = require('multer');
const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null,'uploads/');
    },
    filename : (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({storage: storage,
    fileFilter: (req, file, cb)=>{
        const fileTypes = /jpg|jpeg|png/;
        const mimeType = fileTypes.test(file.mimetype.toLowerCase());
        const extName = fileTypes.test(path.extname(file.originalname));
        if (mimeType && extName){
            return cb(null,true);
        }
        return cb (new Error ('Error: Tipo de archivo no permitido'));
    },
    limits:{
        fileSize:10000000//10mg
    }
});


app.post('/upload', upload.single('archivo'), (req,res)=>{
    res.send("Archivo subido");
});

app.post('/uploads', upload.array('archivos',10), (req,res)=>{
    res.send("Archivos subidos");
});


const usuariosRouter=require('./rutas/usuarios');
app.use(express.json());
app.use('/usuarios',(usuariosRouter));
/*app.get('/',(req,res)=>{
    res.send('server funcionando');
});*/
app.use(express.static(path.join(__dirname,'public')));//me direcciona al html de la carpeta public
app.listen(port, () =>{
    console.log("server express ejecuntadose en puerto "+port);
});