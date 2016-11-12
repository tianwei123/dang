window.onload=function(){
	function $(id){
		return document.getElementById(id);
	}	
	
	/*下拉框*/
	$('myDang').onmouseover=function(){
		$('dd_menu_top_down').style.display="block";
	}
		
	$('myDang').onmouseout=function(){
		$('dd_menu_top_down').style.display="none";
	}	
	
	
	/*显示时间*/
	function myDate(){
		var myDate=new Date();
		var str='';
		str=myDate.getFullYear()+'年';
		str+=myDate.getMonth()+1+'月';
		str+=myDate.getDate()+'日';
		str+=' '+myDate.getHours()+'点';
		str+=myDate.getMinutes()+'分';
		str+=myDate.getSeconds()+'秒';
		$('myDate').innerHTML=str;
	}
	setInterval(myDate,500);
}
