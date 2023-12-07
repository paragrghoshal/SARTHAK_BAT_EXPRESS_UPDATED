const db = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();
//const url = process.env.URL;
const port = process.env.PORT || 3000;
const url = process.env.DB_CONNECTION_STRING

const Schema = new db.Schema({
  Url: String,
  Name: String,
  Search: String
});

const Vids = db.model("bobrossvids", Schema);
const Vids2 = db.model("alps", Schema);

async function getAndSendVidofBob(x, y) {
  await db.connect(url);

  try {

    const Vid = await Vids.findOne({
      Url: "https://www.youtube.com/watch?v=lLWEXRAnQd0&t=1s",
      Name: "Bob Ross - Island in the Wilderness (Season 29 Episode 1)",
      Search: x
    })
      .select('_id')
      .select('Search')
      .select(y);

    db.connection.close();

    if (Vid) {
      return Vid;
    } else {
      return false;
    }
  } catch (err) {
    db.connection.close();
    throw err;
  }
}

async function getAndSendVidofAlp(x, y) {
  await db.connect(url);

  try {

    const Vid2 = await Vids2.findOne({
      Url: "https://www.youtube.com/watch?v=hxVdo6aTssQ",
      Name: "How I learned to paint ANYTHING!",
      Search: x
    })
      .select('_id')
      .select('Search')
      .select(y);
      

    db.connection.close();

    if (Vid2) {
      return Vid2;
    } else {
      return false;
    }
  } catch (err) {
    db.connection.close();
    throw err;
  }
}

module.exports = {
  getAndSendVidofBob,
  getAndSendVidofAlp
}