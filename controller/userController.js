const db = require('../db/db');

const obtenerTodosLosUsuarios = (req,res)=>{
    const sql = 'select * from usuarios';
    db.query(sql, (err, results)=>{
        if (err){
            throw err;
        }
        res.json(results);
    });
}
      
const obtenerUsuarioPorId = (req,res)=>{
    const {id} = req.params;
    const sql = 'select * from usuarios where id=?';
    db.query(sql, [id], (err, result)=>{
        if(err){
            throw err;
        }
        if (result.length!==0){
            res.json(result);
        }else{
            res.json({Mensaje:"Usuario no existe."})
        }
    });
};
const crearUsuario = (req,res)=>{
    const {nombre, apellido, mail} = req.body;
    const sql = 'insert into usuarios (nombre, apellido, mail) values (?,?,?)';
    db.query(sql,[nombre,apellido,mail], (err, result)=>{
        if (err){
            throw err;
        }
        res.json({
            message:"creado con exito",
            idUsuario:result.insertId
        });
    });
};
const actualizarUsuario = (req,res)=>{
    const{id}=req.params;
    const {nombre,apellido,mail}=req.body;
    const sql2= "select id from usuarios where id = ?"
    const sql='update usuarios set nombre = ?, apellido = ?, mail = ? where id = ?'
    db.query(sql2,[id], (err, result)=>{
        if (result.length===0){
            res.json({message:"usuario no encontrado."})
        }else{
            db.query(sql, [nombre,apellido,mail, id], (err,result)=>{
            if (err){
                throw err
            }        
                res.json({message:"Usuario editado."});            
            });
        }
    })
}
const borrarUsuario = (req,res)=>{
    const{id}=req.params;
    const sql2= "select id from usuarios where id = ?"
    const sql = 'delete from usuarios where id = ?'
    db.query(sql2,[id], (err,result)=>{
        if(result.length===0)
            res.json({mensaje:"usuario no encontrado."})
        else{
            db.query(sql, [id], (err,result)=>{
                if (err){
                    throw err
                }
                    res.json({Mensaje:"Usuario eliminado."});
            })
        }
    })

};

module.exports = {
    obtenerTodosLosUsuarios,
    obtenerUsuarioPorId,
    crearUsuario,
    actualizarUsuario,
    borrarUsuario
}