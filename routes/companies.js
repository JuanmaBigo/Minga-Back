import express from "express";
import read_controller from '../controllers/comapnies/read_all.js'
import create_controller from '../controllers/comapnies/create.js'
import passport from "../middlewares/passport.js";
import exists_name from "../middlewares/exists_name_company.js";
import validator from "../middlewares/validator.js";
import schema from '../schemas/company.js'


const { read_all } = read_controller
const { create } = create_controller

let router = express.Router()

router.get('/', read_all)

router.post('/', passport.authenticate('jwt', {session: false}), exists_name, validator(schema), create)


export default router