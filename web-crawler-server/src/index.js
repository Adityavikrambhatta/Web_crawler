const express = require('express');
const cors = require('cors')
const app = express();
const port = 3001;
const path = require('path')
require('dotenv').config();

const mongoose = require('mongoose')

const taskRouter = require(path.join(__dirname, "routers", "taskrouters.js"))
const {signUp, login} = require(path.join(__dirname, "routers", "authrouters.js"))
const verifyToken = require(path.join(__dirname, "routers", "middleware.js"))
const evenRouter = require(path.join(__dirname, "routers", "eventrouters.js"))

app.use(cors({
    origin: 'http://localhost:3000', // Adjust the origin to match your frontend URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Allow credentials
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
 

try{
    mongoose.connect("mongodb://localhost:27017/webCrawler",{
            useUnifiedTopology: true,
            useNewUrlParser: true
    });
    console.log("Connected to the DB")

}catch(err){
    console.log("Connection to the DB failed")
}

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});


app.get('/', (req, res)=>{
    return res.status(200).send("<HTML><h1>Server  Initialised . <br/> Welcome to 'Virtual Event Management'  </h1></HTML>")
});

app.post('/register', signUp );
app.post('/login', login ) ;

app.use('/', evenRouter)

app.use('/users', verifyToken ,taskRouter );



app.listen(port, (err) => {
    if (err) {
        return console.log('Something bad happened', err);
    }
    console.log(`Server is listening on ${port}`);
});


module.exports = app;  