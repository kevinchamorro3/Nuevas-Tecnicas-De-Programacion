const { MongoConnection } = require("../lib/mongo");

const COLLECTION = "clients";
const findUsers = () =>
  new Promise(async (resolve, reject) => {
    try {
      const DB = await MongoConnection(); //para que me retorne la configuracion de la db
      //obtenemops los clientes
      const clients = DB.collection(COLLECTION);
      const clientsList = await clients.find({}).toArray();
      resolve(clientsList);
    } catch (error) {
      reject(error);
    }
  });
const createuser = (user) =>
  new Promise(async (resolve, reject) => {
    try {
      const DB = await MongoConnection();
      const clients = DB.collection(COLLECTION);
      const result = await clients.insertOne(user);
      resolve(result);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
module.exports = {
  findUsers,
  createuser,
};
