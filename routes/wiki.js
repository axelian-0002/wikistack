const express = require("express") //must have string to import module
const router = express.Router()

const {addPage} = require('../views')

router.get('/', (req, res, next) => {
  res.send('got to post')
})

router.post('/', (req, res, next) => {
  res.send(req.body)
})

router.get('/add', (req, res, next) => {
  res.send(addPage())
})

module.exports = router
