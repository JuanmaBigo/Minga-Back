import express from 'express';
import UserMinga from '../models/UserMinga.js';
let router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  return res
    .status(200)
    .send('pagina de usuarios');
});

router.post(
  '/',
  async (req, res) => {
    try {
      let userMinga = await UserMinga.create(req.body)
      return res.status(201).json({
        success: true,
        user: userMinga,
      })
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        success: false,
        message: 'No se pudo crear'
      })
    }

  })


export default router;
