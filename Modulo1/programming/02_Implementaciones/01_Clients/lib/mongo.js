const { MongoClient } = require("mongodb");
const DB_NAME = "clients";
const URL =`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@modulo-1.zgied.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;
console.log(URL);

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
