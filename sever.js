// import express from 'express'
const express=require('express')
const static=require('express-static')

var server=express()
server.listen(8088)

// server.get(),server.post(),server.use()
server.post('/user',function(req,res){
	console.log(req.query)
	res.send('欢迎登陆')
	res.end()
})

server.use(static('./www'));



