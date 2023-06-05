const express = require('express'); 
const app = express()

/* 포트 설정 */
app.set('port', process.env.PORT || 8080); 

/* 공통 미들웨어 */ 
app.use(express.static(__dirname + '/staticfolder')); //static() 안에 static 폴더로 지정해줄 파일 경로 저장 


/* 라우팅 설정 */
app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index2.html');
});

app.get('/user/:id', (req,res)=> {
	res.send(req.params.id + "님의 개인 페이지입니다");
}); 

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 실행중')
});