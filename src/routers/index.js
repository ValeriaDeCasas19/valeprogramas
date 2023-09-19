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
router.post('/add', async(req,res)=>{
    const valor = new Datos(req.body);
    await valor.save();
    res.redirect('/');
});

router.get('/del/:id', async(req,res)=>{
    const {id}=req.params;
    await Datos.findByIdAndRemove(id);
    res.redirect('/');
})

//get obtiene y post manda datos
module.exports = router;
//tarea: que al eliminar abra una ventana modal para que se confirme la eiminacion 