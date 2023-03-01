import express from 'express';
import User from '../models/User.js';
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
      req.body.photo = 'false'
      req.body.is_online = false
      req.body.is_admin = false
      req.body.is_author = false
      req.body.is_company = false
      req.body.is_verified = false
      req.body.verify_code = '63f9311a5a8c75421b3850d8'

      let user = await User.create(req.body)
      return res.status(201).json({
        success: true,
        user: user,
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
