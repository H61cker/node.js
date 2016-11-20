// 모듈을 추출한다.

var http = require('http');
var express = require('express');

// 웹 서버를 생성합니다.
var app = express();

app.use(function(request,response,next){
	request.test = 'request.test';
	response.test = 'response.test';
	next();
});

app.use(function(request,response,next){
	response.send('<h1>' + request.test + '::' + response.test + '</h1>');
});

http.createServer(app).listen(80, function(){
	console.log('Server Running at http://127.0.0.1:80');
});