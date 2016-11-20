// 모듈을 추출.
var request = require('request');

// 웹 페이지를 긁습니다.
request('http://www.google.com',function (error,response,body) {
	console.log(body);
});