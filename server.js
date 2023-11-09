const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');
dotenv.config({path:'./config.env'});
const bodyParser = require("body-parser");
const cors = require("cors");

const {getAndSendVidofAlp, getAndSendVidofBob} = require("./database/database")


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './public')));

const port = process.env.PORT

app.listen(port, () => {
    console.log("server is running")
})

app.get("/", async (req, res) => {
  const nameuno = await getAndSendVidofBob("Bob Ross", "-Url");
  const namedos = await getAndSendVidofAlp("Alpefy", "-Url");

  res.render(path.join(__dirname, './public/main.ejs'), { nameuno, namedos });  
})