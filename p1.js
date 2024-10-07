const mongo = require('mongodb');
const assert = require('assert');

// Connection URL
const URL = "mongodb://localhost:27017/"
const dbname = "dbuser"

// Create a new MongoClient
 const client = new mongo.MongoClient(URL);

 let data = [
    {
        name: "John Doe",
        email: "johndoe@example.com",
        age: 25,
       isAdmin: false
    },
    {
        name: "Dil",
        email: "dilku@example.com",
        age: 27,
        isAdmin: true
    },
    {
        name: "Tom",
        email: "tom@example.com",
        age: 23,
        isAdmin: false
    }
 ]

 async function main() {
    await client.connect();
    console.log(`mongodb connected successfully`);

    // select database
    const db = client.db(dbname);
    // create collection
    const coll = db.collection('users');
    await coll.insertMany(data)
    return "..done, Data inserted successfully"
 }

 main() 
 .then(res => {
    console.log(res)
 }).catch(err => assert.deepStrictEqual(err,null));
