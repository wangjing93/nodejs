/**
 * Created by WangJing on 2017/7/11.
 */
var express = require('express');
var app = new express();
var fs = require('fs');
var bodyParser = require('body-parser');
var multer = require('multer');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(multer({dest: '/tmp/'}).array('image'));

app.get('/index.html', function (req, resp) {
    resp.sendFile(__dirname + "/" + "index.html");
});

app.post('/file_upload', function (req, resp) {
    console.log(req.files[0]);
    var dest_file = __dirname + "/" + req.files[0].originalname;
    console.log(dest_file);
    fs.readFile(req.files[0].path, function (err, data) {
        fs.writeFile(dest_file, data, function (err) {
            if(err) {
                console.log(err);
            } else {
                response = {
                    message: 'File uploaded successfully',
                    filename: req.files[0].originalname
                };
            }
            console.log(response);
            resp.end(JSON.stringify(response));
        });
    });
});

var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为http://%s:%s", host, port);
})