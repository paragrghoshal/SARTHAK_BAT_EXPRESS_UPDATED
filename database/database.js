const db = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();
//const url = process.env.URL;
//const port = process.env.PORT;
const url = process.env.TEST_URL;

const Schema = new db.Schema({
  Url: String,
  Name: String,
  Search: String
}, {
  toJSON: { virtuals: true },
});

const Schemabat = new db.Schema({
  name : String,
  url : String,
  text : String
}, {
  toJSON: { virtuals: true },
});

const Vids = db.model("bobrossvids", Schema);
const Vids2 = db.model("alps", Schema);
const Vids3 = db.model("bat", Schemabat);

async function getAndSendVidofBob(x) {
  await db.connect(url);

  try {

    const Vid = await Vids.findOne({
      Url: "https://www.youtube.com/embed/Io4fwhacpEs",
      Name: "Bob Ross - Island in the Wilderness (Season 29 Episode 1)",
      Search: x
    })
      .select('-_id')
      .select('-__v')
      .select("-Url")
      .select("-Search")

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

async function getAndSendVidofAlp(x) {
  await db.connect(url);

  try {

    const Vid2 = await Vids2.findOne({
      Url: "https://www.youtube.com/embed/hxVdo6aTssQ",
      Name: "How I learned to paint ANYTHING!",
      Search: x
    })
    .select('-_id')
    .select('-__v')
    .select("-Url")
    .select("-Search")

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

async function getBob(x){
  await db.connect(url);

  try {

    const Video1 = await Vids.findOne({
      Url: "https://www.youtube.com/embed/Io4fwhacpEs",
      Name: "Bob Ross - Island in the Wilderness (Season 29 Episode 1)",
      Search: x
    })
    .select('-_id')
    .select('-__v')
    .select("-Name")
    .select("-Search");

    db.connection.close();

    if (Video1) {
      console.log(JSON.stringify(Video1.toJSON()))
      return Video1.toJSON();
    } else {
      return false;
    }
  } catch (err) {
    db.connection.close();
    throw err;
  }
}

async function getAlp(x){
  await db.connect(url);

  try {

    const Video3 = await Vids2.findOne({
      Url: "https://www.youtube.com/embed/hxVdo6aTssQ",
      Name: "How I learned to paint ANYTHING!",
      Search: x
    })
    .select('-_id')
    .select('-__v')
    .select("-Name")
    .select("-Search");

    db.connection.close();

    if (Video3) {
      console.log(JSON.stringify(Video3.toJSON()))
      return Video3.toJSON();
    } else {
      return false;
    }
  } catch (err) {
    db.connection.close();
    throw err;
  }
}

async function getBat(x, y){
  await db.connect(url);

  switch(x){
    case "text":
      try {
        const result = await Vids3.find({ name : y })
          .select("-_id -__v -url -name")
          .select("text")
          .exec();
      
        return result;
      } catch (error) {
        console.error(error);
      }
      break;
    case "url":
      try {
        const result = await Vids3.find({ name : y })
          .select("-_id -__v -name -text")
          .select("url")
          .exec();

        const resultJson = result.map(doc => doc.toJSON());
        return resultJson;
      } catch (error) {
        console.error(error);
      }
      break;
  }
}

module.exports = {
  getAndSendVidofBob,
  getAndSendVidofAlp,
  getBob,
  getAlp,
  getBat
}