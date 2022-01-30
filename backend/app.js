
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.post("/send-image", (req, res) => {
    console.log(req.body);
    res.send("ok");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})