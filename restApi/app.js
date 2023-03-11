const express = require('express');
const app = express();

const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
async function main() {
	await client.connect();
}
const collection = client.db('internfeb').collection('users');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get('/health',(req,res) => {
    res.send('health ok')
})


/**Get User*/
app.get('/users',async(req,res) => {
    const output = []
    
    const cursor = collection.find();
        for await (const doc of cursor) {
        output.push(doc)
    }
    cursor.closed; 
    res.send(output)
})


/**Insert User*/
app.post('/addUser',async(req,res) => {
    await collection.insertOne(req.body)
    res.send('Data Added')
})




app.listen(8811,() => {
    main()
    console.log(`Running on thr port 8811`)
})