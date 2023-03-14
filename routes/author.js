import express from 'express';
import controller from '../controllers/authors/create.js';
import readController from '../controllers/authors/read_all.js'
import validator from '../middlewares/validator.js';
import schema from '../schemas/authors.js';
import passport from '../middlewares/passport.js';

const { create } = controller;
const {read_all} = readController



let router = express.Router();


router.get('/',read_all)
router.post('/', validator(schema), create);


export default router;