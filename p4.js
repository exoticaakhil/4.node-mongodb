const mongo = require('mongodb');
const assert = require('assert');

// Connection URL
const URL = "mongodb://localhost:27017/"
const dbname = "dbuser"

// Create a new MongoClient
 const client = new mongo.MongoClient(URL);

 async function main() {
    await client.connect();
    console.log(`mongodb connected successfully`);

    // select database
    const db = client.db(dbname);
    // create collection
    const coll = db.collection('users');
    // update single collection data
    let out = await coll.updateOne({ email: "dilku@example.com"},{
      $set: {
        name: "sree",
        email: "dilkusree@example.com",
        age: 21,
        isAdmin: true
      }  
    })
    return "..done users data updated successfully"
 }

 main() 
 .then(res => {
    console.log(`users data =`,res)
 }).catch(err => assert.deepStrictEqual(err,null));