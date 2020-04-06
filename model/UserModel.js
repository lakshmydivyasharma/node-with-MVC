//anjelica I worked with teddy and micheal from audible
const MongoClient = require('mongodb').MongoClient

var db, collection;

const url = "mongodb+srv://anjelica:123@cluster0-qmt3m.mongodb.net/test?retryWrites=true&w=majority";
const dbName = "test";


  MongoClient.connect(url, { useNewUrlParser: true }, (error, client) => {
    if(error) {
      throw error;
    }
    db = client.db(dbName);
    console.log("Connected to `" + dbName + "`!");
  });

 class UserModel {//static method called on the class
  static getProfile(id){
  let data= db.collection('users')
  .findOne({id:id })
  console.log(data)
  return data

}

 }
//in this file I am exporting this...
module.exports= UserModel
