const express=require('express')
const static=require('express-static')
const b_parser=require('body-parser')
const c_parser=require('cookie-parser')
const c_session=require('cookie-session')//session基于cookie


var server=express()
server.listen(8988)


server.use(c_parser('djfaisdhfiu'))//cookie签名加密验证
server.use(c_session({
	name:'session1',
	keys:['asdf','fasf','greasd','asfae'],
	maxAge:2000000
}))


server.use(b_parser.json({limit: '1mb'}));
server.use(b_parser.urlencoded({
	extended:false,//扩展模式
}))

server.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers','Content-Type');
  res.header('Access-Control-Allow-Methods','*');
  res.header('Content-Type','application/json;charset=utf-8');
  next();
});

server.use(function(req,res,next){
	req.secret='djfaisdhfiu'//可以不需要
	res.cookie('user','lxr',{signed:true})//path,maxAge
	req.session['user']
	if(req.session["count"]===null){
		req.session["count"]=1
	}else{
		req.session["count"]++
	}
	console.log(req.session)
	//res.clearCookie(name)//删除cookie
	//delete res.session//删除session
	console.log('无签名cookie',req.cookies)
	res.send('cookiekkk')
})

server.post('/user',function(req,res,next){
	//req.query get数据,req.body post数据
	console.log(JSON.parse(req.body.data))
	res.send({data:'登录成功',code:200})
	next();//链式传递
})

server.use(static('./www'));


// setImmediate(() => {
//   console.log('setImmediate');
// })

// setTimeout(() => {
//   console.log('settimeout');
// }, 0)

// process.nextTick(() => {
//   console.log('next');
// })







