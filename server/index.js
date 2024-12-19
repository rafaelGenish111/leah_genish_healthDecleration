const express = require('express');
const cors = require('cors');
const app = express()

app.use(express.json())
app.use(cors())

app.use('/user', require('./routes/user'))
app.use('/declerations', require('./routes/declerations'))

app.get('/', (req, res) => {
    res.send("welcome")
})

const port = process.env.PORT || 7070
app.listen(port, () => {
    console.log(`listening on port ${port}`);
})