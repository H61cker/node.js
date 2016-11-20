// 모듈을 추출합니다.
var http = require('http');
var express = require('express');

// 웹 서버를 생성합니다.
var app = express();
app.use(express.static('public'));
/*
	app.get() : 클라이언트의 GET 요청을 처리합니다.
	app.post() : 클라이언트의 POST 요청을 처리합니다.
	app.put() : 클라이언트의 PUT 요청을 처리합니다.
	app.del() : 클라이언트의 DELETE 요청을 처리합니다.
	app.all() : 클라이언트의 모든 요청을 처리합니다.
*/

// 라우트합니다.
app.all('/a',function (request,response) {
	response.send('<h1>Page A</h1>');
});
app.all('/b',function (request,response) {
	response.send('<h1>Page B</h1>');
});
app.all('/c',function (request,response) {
	response.send('<h1>Page C</h1>');
});

// 웹 서버를 실행합니다.
http.createServer(app).listen(52273,function(){
	console.log('Server running at http://127.0.0.1:52273');
});