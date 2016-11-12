window.onload=function(){
	function $(id){
		return document.getElementById(id);
	}	
	
	
	/*弹出广告窗口*/
	window.open('open1.html', '_blank', 'height=350, width=520, top=101, left=100, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no');
	
		
	/*轮播图*/
	var imgIndex=1;
	var max=6;	
	var scrollTime=setInterval(scrollImg,3000);
	$('dd_scroll').addEventListener('mouseover',stopScroll,false);
	$('dd_scroll').addEventListener('mouseout',continueScroll,false);
	
	for(var t=1;t<=6;t++){		
		$('scroll_number_'+t).addEventListener('mouseover',function(e){loopShow(e);},false);
		$('scroll_number_'+t).addEventListener('mouseout',continueScroll,false);
	}			
	function scrollImg(){
		imgIndex++;
		if(imgIndex<=6){		
			$('dd_scroll').src="images/dd_scroll_"+imgIndex+".jpg";
			scrollNumShow(imgIndex);
		}else{
			$('dd_scroll').src="images/dd_scroll_1.jpg";
			$('scroll_number_6').className="scroll_number_out";
			$('scroll_number_1').className="scroll_number_over";
			imgIndex=1;
		}
	}	
	function loopShow(e){  
		var i=e.target.id.split("_")[2];
		if(i<=max){
			clearInterval(scrollTime);
			$('dd_scroll').src="images/dd_scroll_"+i+".jpg";
			imgIndex=i;
		}		
		scrollNumShow(i);		
	}
	function scrollNumShow(i){
		$('scroll_number_'+i).className="scroll_number_over";
		for(var j=1;j<=6;j++){
			if(j!=i){
				$('scroll_number_'+j).className="scroll_number_out";
			}
		}
	}	
	function stopScroll(){
		clearInterval(scrollTime);
	}	
	function continueScroll(){
		scrollTime=setInterval(scrollImg,3000);
	}		
	
	
	/*文字滚动*/
	var speed=15;
	$('dome2').innerHTML=$('dome1').innerHTML;	
	function scrollUp(){
		if($('dome').scrollTop<=$('dome1').offsetHeight){
			$('dome').scrollTop++;
		}else{
			$('dome').scrollTop=0;
		}
	}	
	var scrollUpTime=setInterval(scrollUp,speed);
	$('dome').onmouseover=function(){
		clearInterval(scrollUpTime);
	}
	$('dome').onmouseout=function(){
		scrollUpTime=setInterval(scrollUp,speed);
	}
	
	
	/*关闭图片*/
	function dd_close(){
		$('right').style.display="none";
	}
	$('dd_close').style.cursor="pointer";	
	$('right').addEventListener('click',dd_close);
	
	

	/*选项卡切换优化*/
	var book_types=$('book_new1').getElementsByTagName('div');
	var dls=$('book1').getElementsByTagName('dl');	
	for(var i=0;i<book_types.length;i++){
		book_types[i].index=i;
		book_types[i].onmouseover=function(){
			if(this.className != "book_type_out"){
				$('book_new1').getElementsByClassName("book_type_out")[0].className="book_type";
				$('book1').getElementsByClassName("book_show")[0].className="book_none";				
				this.className="book_type_out";
				dls[this.index].className="book_show";
			}		
		}
	}
}

