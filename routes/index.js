import userRouter from './users.js'
import chapterRouter from './chapters.js'


import express from 'express';
let router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Minga Backend Juanma' });
});


// en el enrutador principal voy a enrutar todos los recursos
// es decir voy a llamar y configurar las rutas de usuarios, categorias, libros, etc
// a traves del metodo .use() le indico al enrutador principal que utilice esas rutas con el endpoint correspondiente
router.use('/users',userRouter);
router.use('/chapters',chapterRouter);


export default router;
