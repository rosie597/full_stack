const ejs=require('ejs')
const fs=require('fs')

ejs.renderFile('./views/1.ejs',{data:{arr:[{name:'lxr',age:21},{name:'lyt',age:19},{name:'lxs',age:20}]}},function (err,data) {
	console.log(data)
})