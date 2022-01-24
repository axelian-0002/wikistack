const express = require("express") //must have string to import module
const router = express.Router()

const { Page } = require("../models");
const { addPage } = require('../views')

router.get('/', (req, res, next) => {
  res.send('got to post')
})


router.post('/', async (req, res, next) => {

  // STUDENT ASSIGNMENT:
  // add definitions for `title` and `content`
  const {title, content} = req.body || {}

  try {
    const page = await Page.create({
      title, content
    });

    // make sure we only redirect *after* our save is complete! Don't forget to `await` the previous step. `create` returns a Promise.
    res.redirect('/');
  } catch (error) { next(error) }
});

router.get('/add', (req, res, next) => {
  res.send(addPage())
})

module.exports = router
