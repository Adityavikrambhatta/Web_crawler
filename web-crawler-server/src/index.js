const express = require('express');
const app = express();
const port = 3000;
const path = require('path')
require('dotenv').config();

const mongoose = require('mongoose')




const taskRouter = require(path.join(__dirname, "routers", "taskrouters.js"))
const {signUp, login} = require(path.join(__dirname, "routers", "authrouters.js"))
const verifyToken = require(path.join(__dirname, "routers", "middleware.js"))

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



app.get('/', (req, res)=>{
    return res.status(200).send("<HTML><h1>Server  Initialised . <br/> Welcome to 'Virtual Event Management'  </h1></HTML>")
});

app.post('/register', signUp );
app.post('/login', login ) ;

app.use('/', verifyToken ,taskRouter );


app.listen(port, (err) => {
    if (err) {
        return console.log('Something bad happened', err);
    }
    console.log(`Server is listening on ${port}`);
});



module.exports = app;  