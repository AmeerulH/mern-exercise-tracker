const express = require('express');
const cors = require('cors');

// Will help to connect to the MongoDB Database
const mongoose = require('mongoose');

require('dotenv').config();

// Create express server
const app = express();
const port = process.env.PORT || 5000;

// Middleware 
app.use(cors());
app.use(express.json()); // parse JSON

const uri = process.env.ATLAS_URI; // Get from MongoDB dashboard

// Where the database is stored, how the connection is started
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

// What starts the server on a certain port
app.listen(port.anchor, () => {
    console.log(`Server is running on port: ${port}`);
})