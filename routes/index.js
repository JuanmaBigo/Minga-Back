import express from 'express';
import userRouter from './users.js'
import chapterRouter from './chapters.js'
import mangaRouter from './mangas.js'
import authorRouter from './author.js'
import companyRouter from './companies.js'
import donationRouter from './donation.js'


let router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Minga Backend' });
});


// en el enrutador principal voy a enrutar todos los recursos
// es decir voy a llamar y configurar las rutas de usuarios, categorias, libros, etc
// a traves del metodo .use() le indico al enrutador principal que utilice esas rutas con el endpoint correspondiente

router.use('/mangas', mangaRouter)
router.use('/authors',authorRouter)
router.use('/auth',userRouter);
router.use('/chapters',chapterRouter);
router.use('/companies', companyRouter)
router.use('/donation', donationRouter)



export default router;

