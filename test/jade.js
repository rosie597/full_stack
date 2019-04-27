const jade=require('jade')
const fs=require('fs')

var str=jade.renderFile('./views/1.jade',{pretty:true,arr:['aaa','bbbb','ccc','dddd']})
console.log(str)
fs.writeFile('./www/jade1.html',str,function (err) {
	if(err)
		console.log('编译失败',err)
	else
		console.log('编译成功')
})