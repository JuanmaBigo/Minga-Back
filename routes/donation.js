import express from "express";
import controller from "../controllers/mercadopago/create.js";
import passport from '../middlewares/passport.js';


const { create } = controller;

let router = express.Router()


router.post('/', passport.authenticate('jwt', { session: false }), create)


export default router

