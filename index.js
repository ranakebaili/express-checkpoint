const express = require("express");
const app = express();
const fs = require("fs");
const PORT = 3000;

const verif1 = require('./Verif');

app.use(express.json());

app.get('/', verif1, (req, res) => {
    fs.readFile('./Home.html', 'utf8', (err, data) => {
        err ? res.end('file not found') && console.error(err) : res.end(data);
    });
});

app.get('/contact', verif1, (req, res) => {
    fs.readFile('./Contact.html', 'utf8', (err, data) => {
        err ? res.end('file not found') && console.error(err) : res.end(data);
    });
});

app.get('/services', verif1, (req, res) => {
    fs.readFile('./Services.html', 'utf8', (err, data) => {
        err ? res.end('file not found') && console.error(err) : res.end(data);
    });
});

app.listen(PORT, (err) => {
    err ? console.log(err) : console.log("server running on 3000");
});
