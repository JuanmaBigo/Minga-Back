import express from 'express';
import Chapter from '../models/Chapter.js';
let router = express.Router();

/* GET chapters listing. */
router.get('/', (req, res) => {
  return res
    .status(200)
    .send('chapters page');
});

router.post(
  '/',
  async (req, res) => {
    try {
      let chapter = await Chapter.create(req.body)
      return res.status(201).json({
        success: true,
        chapter: chapter,
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