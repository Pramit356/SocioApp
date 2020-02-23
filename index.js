const express = require('express');
const cookieParser = require('cookie-parser');
const validate_email = require('./test_module');

const app = express();
const port = 3000;
app.use(cookieParser());

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
app.use(express.static(__dirname+'/public'));
const email = 'kaushal.y@somaiya';

app.get('/', (req, res) => {
    res.send("<h3>email: " + email + "<br>validation: " + validate_email.check(email) + "</h3>");
    // res.sendFile(__dirname + '/index.html');
});

// importing json object
const data = require('./ajax_info.json');
app.get('/jsonObjects', function(req,res){
    res.json(data);
});

app.get('/setcookie', function(req, res){
    // setting cookies
    res.cookie('username', 'kaushal_y', { maxAge: 900000, httpOnly: true }); //expire after 900 sec
    return res.send('Cookie has been set');
});

app.get('/getcookie', function(req, res) {
    var username = req.cookies['username'];
    if (username) {
        return res.send(username);        
    }

    return res.send('No cookie found');
});

app.get('/clearcookie', function(req, res){
    res.clearCookie('username');
    res.send('cookie cleared');
});



// 404 error
app.get('*', (req, res) => {
    res.send('<h1>Error 404, path not found</h1>');
});



