const express = require('express');

const router = express.Router();

const userController = require('../controller/userController');

router.get('/', userController.obtenerTodosLosUsuarios);
router.get('/:id',userController.obtenerUsuarioPorId);
router.post('/',userController.crearUsuario);
router.put('/:id',userController.actualizarUsuario);
router.delete('/:id',userController.borrarUsuario);
/*let usuarios = [
    {id:1,nombre:"eduardo",apellido:"lazarte",dni:30726244,domicilio:"lamadrid"},
    {id:2,nombre:"ivan",apellido:"lazarte",dni:56222333,domicilio:"1 grado"},
    {id:3,nombre:"ramiro",apellido:"lazarte",dni:57444888,domicilio:"jardin"},
    {id:4,nombre:"patricia",apellido:"almaraz",dni:29653492,domicilio:"lamadrid"},
    {id:5,nombre:"juan",apellido:"lopez",dni:29789456,domicilio:"independencia"}
];

router.get('/',(req,res)=>{
    res.json({
        usuarios
    });
});

router.get('/:id',(req,res)=>{
    const user = usuarios.find(u => u.id === parseInt(req.params.id));
    /*const user = usuarios.find((u)=>{
        if (u.id === parseInt(req.params.id)){
            return true;
        }else{
            return false;
        }
    })
    if (!user) return res.status(404).send("usuario no existe");
    res.json(user);
});

router.post('/',(req,res)=>{
    const nuevoUsuario = {
        id:usuarios.length+1, 
        nombre:req.body.nombre,
        apellido:req.body.apellido,
        dni:req.body.dni,
        direccion:req.body.direccion
    }
    usuarios.push(nuevoUsuario);
    res.status(201).json(nuevoUsuario);
});*/
module.exports=router;