const { MongoClient } = require("mongodb");

const DB_NAME = "clients";
const URL =
  "mongodb+srv://clients:<password>@modulo-1.zgied.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

var MongoConenction = () =>
  new Promise(async (resolve, reject) => {
    try {
      let client = new MongoClient(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      await client.connect();
      resolve(client.db(DB_NAME));
    } catch (error) {
      reject(error);
    }
  });
module.exports.MongoConnection = MongoConenction;
