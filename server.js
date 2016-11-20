// 모듈을 추출합니다.
var http = require('http');
var express = require('express');

//  웹 서버를 생성합니다.
var app = express();
app.use(function (request,response,next){
	console.log('first');
	next();
});
app.use(function (request,response,next) {
	console.log('second');
	next();
});
app.use(function (request,response,next){
	response.send('<h1>안녕하세요!</h1>');
});

// 웹 서버를 실행합니다.
http.createServer(app).listen(52273, function(){
	console.log('Server Running at http://127.0.0.1:52273');
});