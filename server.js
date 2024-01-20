const express = require('express');
const app = express();
const path = require('path');
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const socketIO = require("socket.io");

const {getAndSendVidofAlp, getAndSendVidofBob, getBob, getAlp, getBat} = require("./database/database")


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './public')));

const port = process.env.PORT;

const server = app.listen(port, () => {
    console.log("server is running")
})

const io = socketIO(server);

app.get("/", async (req, res) => {
  const nameuno = await getAndSendVidofBob("Bob Ross");
  const namedos = await getAndSendVidofAlp("Alpefy");
  const nametres = await getBat("text", "palm");
  const namecuatro = await getBat("text", "three");
  //console.log(nameuno, namedos, nametres, namecuatro);

  res.render(path.join(__dirname, './public/main.ejs'), { nameuno, namedos, nametres, namecuatro });  

  io.sockets.on("connection", (socket) => {
    socket.on("give_bob", async (data) => {
      try {
        const bobData = await getBob("Bob Ross");
        console.log(bobData.Url);
        socket.emit("send_bob", bobData.Url);
      } catch (error) {
        console.error("Error processing give_bob event:", error);
      }
    });
    
    socket.on("give_alp", async (data) => {
     try{ 
      const alpData = await getAlp("Alpefy");
      console.log(alpData.Url);
      socket.emit("send_alp", alpData.Url);
     }catch(error){
      console.error("error : " + error);
     }
    })
    
    socket.on("give_bat", async (data) => {
      try {
        //console.log(data);
        const batData = await getBat("url", data);
        
        if (batData) {
          //console.log(batData);
          socket.emit("send_bat", batData);
        } else {
          console.error("No data received from getBat");
        }
      } catch (err) {
        console.error(err);
      }
    });

    // Handle disconnect event
    socket.on("disconnect", () => {
      console.log(`Client disconnected: ${socket.id}`);
    });
  });
});