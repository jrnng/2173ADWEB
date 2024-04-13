var Express = require('express');
var Mongoclient = require("mongodb").MongoClient;
var cors = require("cors");
const multer = require("multer"); // Import multer module

var app = Express();
app.use(cors());

// Indicate the connection string from mongodb
var CONNECTION_STRING = "mongodb+srv://jairanunag:Jaira0716@mydb.7ivglsi.mongodb.net/?retryWrites=true&w=majority&appName=MyDB";

// Indicate the name of the database
var DATABASENAME = "myDB";

// instantiate the mongodbclient
var database;

// create a listener
app.listen(5038, () => {
    Mongoclient.connect(CONNECTION_STRING, (error, client) => {
        database = client.db(DATABASENAME);
        console.log(`Yay! Now connected to Cluster`);
    })
})

// ROUTES TO ALL ACTIONS

// get all database data
app.get('/api/books/GetBooks', (req, res) => {
    database.collection("books").find({}).toArray((error, result) => {
        if (error) {
            console.error("Error fetching books:", error);
            res.status(500).json({ error: "Failed to fetch books" });
        } else {
            res.json(result);
        }
    });
});

app.post('/api/books/AddBook', multer().none(), async (req, res) => {
    try {
        const numOfDocs = await database.collection("books").countDocuments();
        await database.collection("books").insertOne({
            id: (numOfDocs + 1).toString(),
            title: req.body.title,
            description: req.body.description,
            price: req.body.price
        });
        res.json("Added Successfully");
    } catch (error) {
        console.error("Error adding book:", error);
        res.status(500).json({ error: "Failed to add book" });
    }
});

app.delete('/api/books/DeleteBook', (req, res) => {
    database.collection("books").deleteOne({
        id: req.query.id
    }, (error, result) => {
        if (error) {
            console.error("Error deleting book:", error);
            res.status(500).json({ error: "Failed to delete book" });
        } else {
            res.json("Deleted successfully!");
        }
    });
});
