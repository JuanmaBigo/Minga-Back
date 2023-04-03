import express from 'express';
import read_all_controller from '../controllers/users/read_all.js'
import controller from '../controllers/auth/auth.js'
import validator from './../middlewares/validator.js'
import schema from '../schemas/users.js'
import schemaRegister from '../schemas/userRegister.js'
import accountExistsSignUp from './../middlewares/accountExistsSignUp.js'
import accountExistsSignIn from './../middlewares/accountExistsSignIn.js'
import accountHasBeenVerified from './../middlewares/accountHasBeenVerified.js'
import passwordIsOk from './../middlewares/passwordIsOk.js'
import passport from './../middlewares/passport.js'
import admin_author_controllers from '../controllers/admin/authors.js'
import admin_company_controller from '../controllers/admin/companies.js'
import authorActive from '../middlewares/admin/author_active.js';
import companyActive from '../middlewares/admin/company_active.js';




const {read_all} = read_all_controller

const {sign_up,sign_in,sign_out,token,verifyMail} = controller
const { update_active, getAll_authors } = admin_author_controllers
const { updateCompany_active, getAll_companies } = admin_company_controller


let router = express.Router();

/* GET users listing. */
router.get('/', read_all);

router.get('/verify',verifyMail)//para que al enviarse la peticion se verifique la cuenta (cambia la peticion de is_verifi de false a true)

router.post('/signup',validator(schema),accountExistsSignUp,sign_up)
router.post('/signin',validator(schemaRegister),accountExistsSignIn,accountHasBeenVerified,passwordIsOk,sign_in)
router.post('/signout',passport.authenticate('jwt',{ session:false }),sign_out)
router.post('/token',passport.authenticate('jwt',{ session:false }),token)
router.put('/role/author/:id', passport.authenticate('jwt',{ session:false }), authorActive, update_active)
router.put('/role/company/:id', passport.authenticate('jwt',{ session:false }), companyActive , updateCompany_active)
router.get('/authors/admin', passport.authenticate('jwt',{ session:false }), getAll_authors)
router.get('/companies/admin', passport.authenticate('jwt',{ session:false }), getAll_companies)



export default router;
