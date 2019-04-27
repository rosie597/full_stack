function ajax(param){
	var url=param.url,m=param.method,d=param.data,xhr;
	if(window.XMLHttpRequest){
		xhr=new XMLHttpRequest();
	}else{
		xhr=new ActiveXObject('Microsoft.XMLHttp')
	}
	if(m=='get'){
		if(JSON.stringify(d)!=='{}'){
			url+='?'
			for(let i in d){
				url=url+'&'+i+'='+d[i]
			}
		}
		xhr.open(m,url,true)
		xhr.send()
	}
	if(m=='post'){
		xhr.open(m,url,true)
		xhr.setRequestHeader('content-type',"application/x-www-form-urlencoded")
		xhr.send('data='+d)
	}

	xhr.onreadystatechange=function(){
		if(xhr.status==200&&xhr.readyState==4){
			param.success(xhr.responseText)
		}else{
			param.fail(xhr.responseText)
		}
	}
}


