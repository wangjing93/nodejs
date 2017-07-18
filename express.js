/**
 * Created by WangJing on 2017/7/13.
 */
var express = require('express');
var cookieParser = require('cookie-parser');
var app = new express();

app.use(cookieParser());

app.get('/', function (req, resp) {
    console.log(req.cookies);
});

var server = app.listen(8081)