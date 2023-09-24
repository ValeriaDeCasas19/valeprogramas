const express = require('express');
const router = express.Router();
const model = require('../models/datos.js')();
const Datos = require('../models/datos.js');

router.get('/', async (req, res) =>{
    const datos = await Datos.find();
    console.log(datos);
    res.render('index.ejs',{
        datos
    });

});
router.post('/add', async(req,res)=>{ //para agregar
    const valor = new Datos(req.body);
    await valor.save();
    res.redirect('/');
});

router.get('/del/:id', async(req,res)=>{ //para eliminar
    const {id}=req.params;
    await Datos.findByIdAndRemove(id);
    res.redirect('/');
});

// router.get('/upd/:id', async(req,res)=>{ //para actualizar
//     const {id}=req.params;
//     await Datos.findByIdAndUpdate(id);
//     res.redirect('/');
// });

router.post('/upd/:id', async(req, res)=>{
    const{id} = req.params;
    const{producto, precio, iva} = req.body;
    await Datos.findByIdAndUpdate(id, {producto, precio, iva});
    res.redirect('/')
});







//get obtiene y post manda datos
module.exports = router;
//tarea: agregar un boton al lado del eliminar y al de registrar para que una vez que se presione al lado de 
//eliminar se pongan los datos del registro seleccionado en los campos de arriba, se puedan editar y al darle 
//clic en actualizar al lado de registrar se actualicen los valores en la tabla express. 