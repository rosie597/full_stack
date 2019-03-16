// import express from 'express'
const express=require('express')
const static=require('express-static')
const parser=require('body-parser')

var server=express()
server.listen(8808)

server.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers','Content-Type');
  res.header('Access-Control-Allow-Methods','*');
  res.header('Content-Type','application/json;charset=utf-8');
  next();
});

// server.use(static('./www'));
server.use(parser.json({limit: '1mb'}));
server.use(parser.urlencoded({
	extended:true,//扩展模式
}))

server.post('/user',function(req,res,next){
	//req.query get数据
	//req.body post数据
	console.log((JSON.parse(req.body.data)).user)
	res.send({data:'登录成功',code:200})
	next();//链式传递
})

server.use(function(req,res){
	console.log('all')
})





