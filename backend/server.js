import express from 'express';
import mongodb from 'mongodb';

const  app = express();

var MongoClient = require('mongodb').MongoClient,
assert = require('assert');
//var url = 'mongodb://abuser:abuser123@ds155492.mlab.com:55492/crudewithredux';
//var url = 'mongodb://localhost:27017/crudwithredux';
var url = 'mongodb://abuser:abuser123@ds155492.mlab.com:55492/crudewithredux';
MongoClient.connect(url,{ useNewUrlParser: true }, function(err, client) 
{
assert.equal(null, err);
console.log("Successfully connected to server");
var db = client.db('crudewithredux');
// Find some documents in our collection
/*
db.collection('games').find({}).toArray(function(err, docs) {
// Print the documents returned
docs.forEach(function(doc) {
console.log(doc.title);
});
// Close the DB
client.close();
});*/
app.post('/api/games',(req,res)=>{
   //console.log(req);
   //res.send('hello world');
   db.collection('newgames').find({}).toArray((err,games)=>{
    res.json({ games });
  })
    


})
  //client.close();
// Declare success
console.log("Called find()");
 });
 app.listen(1096,()=> console.log('Server is runing  on localhost: 1096'));
/*
const  app = express();
//const dbUrl  = "mongodb://locahost/crudwithredux";
const dbUrl  = "mongodb://locahost/backend";

var MongoClient = require('mongodb').MongoClient
  , Server = require('mongodb').Server;
var mongoClient = new MongoClient(new Server('localhost', 27017));

mongoClient.connect(function(err, mongoClient) {
  var db1 = mongoClient.db("crudwithredux");
  
  app.get('/api/games',(req,res)=>{
  
    mongoClient.collection('backend').find({}).toArray((err,backend)=>{
        res.json({ backend });
    })
    crudwithredux
       //console.log('Checking value ');
   const insertDocuments = (db, callback) => {
        const collection = db.collection('games');
        collection.insert(
          [{ name: 'Bob' }, { name: 'John' }, { name: 'Peter' }],
          (error, result) => {
            if (error) return process.exit(1);
            callback(result);
          }
        );
      }; 
        mongoClient.collection('crudwithredux').find({}).toArray((err,games)=>{
        res.json({ backend });
    })
 //res.send('hello world');
    
})
app.listen(4098,()=> console.log('Server is runing  on localhost: 4098'));
 

  app.listen(8080, () => {
    console.log('listening on 8080');
});

 //mongoClient.close(); 

});
*/
