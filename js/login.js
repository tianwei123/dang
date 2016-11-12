window.onload=function(){
	function $(id){
		return document.getElementById(id);
	}	
	$('email').onblur=function(){
		if(this.value == ''){
			alert("请输入Email地址或昵称");
		}
	}
	$('pwd').onblur=function(){
		if(this.value == ''){
			alert("请输入密码");
		}
	}
}
