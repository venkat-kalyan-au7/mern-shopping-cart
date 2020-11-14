import express from 'express'
const router = express.Router()
import upload from "../utils/imageUpload.js"

router.post('/', upload.single('image'), (req, res) => {
    res.send(`/${req.file.path}`)
  })
  
export default router