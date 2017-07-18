/**
 * Created by WangJing on 2017/7/12.
 */
var server = require('./server');
var router = require('./router');
server.start(router.route);