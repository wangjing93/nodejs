/**
 * Created by WangJing on 2016/12/30.
 */
/*
var fs = require("fs");

var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("程序执行结束");
*/
/*
var fs = require('fs');

fs.readFile('input.txt', function (err, data) {
    if(err) return console.error(err);
    console.log(data.toString());
});

console.log("程序执行结束");
*/
//引入events模块
var events = require('events');
//创建eventEmitter对象
var eventEmitter = new events.EventEmitter();

//创建时间处理程序
var connectHandler = function connected() {
    console.log("连接成功。");

    //触发data_received事件
    eventEmitter.emit('data_received');
}

//绑定connection时间处理程序
eventEmitter.on('connection', connectHandler);

//使用匿名函数绑定data_received时间
eventEmitter.on('data_received', function () {
    console.log("数据接收成功。");
});

//触发connection 事件
eventEmitter.emit('connection');

console.log("程序执行完毕。");
