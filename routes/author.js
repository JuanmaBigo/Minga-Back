import express from 'express';
import controller from '../controllers/authors/create.js';
import readController from '../controllers/authors/read_all.js'
import get_meController from '../controllers/authors/get_me.js'
import find_id from '../middlewares/auth/find_id.js'
import updateController from '../controllers/authors/update.js'
import validator from '../middlewares/validator.js';
import schema from '../schemas/authors.js';
import schemaUpdate from '../schemas/authorUpdate.js'
import passport from '../middlewares/passport.js';
import exists_name from '../middlewares/authors/exists_name.js';

const { create } = controller;
const {read_all} = readController
const {get_me} = get_meController
const {update} = updateController

let router = express.Router();


router.get('/',read_all)
router.post('/',passport.authenticate('jwt',{session:false}), validator(schema), exists_name, create);
router.get('/me',passport.authenticate('jwt',{session:false}),find_id,get_me)
router.put('/me',passport.authenticate('jwt',{session:false}),validator(schemaUpdate),find_id, update)

export default router;