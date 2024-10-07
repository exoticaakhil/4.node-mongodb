const mongo = require('mongodb');
const assert = require('assert');

// Connection URL
const URL = "mongodb://localhost:27017/dbuser"

// Create a new MongoClient
 const client = new mongo.MongoClient(URL);

 async function main() {
    await client.connect();
    console.log(`mongodb connected successfully`);
    return "..done"
 }

 main() 
 .then(res => {
    console.log(res)
 }).catch(err => assert.deepStrictEqual(err,null));