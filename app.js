const express = require("express")
const morgan = require("morgan")
const { db, Page, User } = require('./models');

const app = express()
const PORT = 8080

app.use(morgan('dev'));

app.use(express.static(__dirname + "/public"))
app.use(express.urlencoded({extended: false}))


// routes
app.use('/wiki', require('./routes/wiki'))
app.use('/users', require('./routes/users'))

app.get('/', (req, res) => {
  res.send('hello world')
})

const init = async () => {
  await Page.sync();
  await User.sync();

  app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
}


db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })

init()
