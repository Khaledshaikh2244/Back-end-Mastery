require('dotenv').config();

const express = require('express');

const app = express();
const port = 4000;

app.get('/' , (req , res)=> {
    res.send( "hello from backend !");
});

app.get('/twitter' , (req, res) => {
    res.send("we are now genius");
});

app.get('/login' , (req , res) => {
    res.send('<h1>we are now on login page ! </h1>')
})
 

app.get('/youtube' ,  (req, res) => {
    res.send('<h2> we are now on youtubePage </h2>')
})
app.listen(process.env.PORT, () => {
    console.log(`example of app using listening on ${port}`);
});