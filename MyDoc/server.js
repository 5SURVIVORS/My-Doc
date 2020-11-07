//create a server with express
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const db = require('./Backend/dataBase/index')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(express.static('dist/MyDoc'))
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

//Router
app.use("/patients", require('./Backend/Routers/PatientsRouter.js'))
app.use("/doctors", require('./Backend/Routers/DoctorsRouter.js'))
app.use("/messages", require('./Backend/Routers/MessagesRouter.js'))
app.use("/appointments", require('./Backend/Routers/AppointmentsRouter.js'))
app.use("/reports", require('./Backend/Routers/ReportsRouter.js'))


//server listening
const port = 3000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}) 