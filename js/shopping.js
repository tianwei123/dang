window.onload=function(){
	function $(id){
		return document.getElementById(id);
	}	
	
	
	/*内容的显示和隐藏*/
	function shopping_commend_show(){
		if($('shopping_commend_sort').style.display=="none"){
			$('shopping_commend_sort').style.display="block";
		}else{
			$('shopping_commend_sort').style.display="none";
		}		
	}
	$('shopping_commend_arrow').addEventListener('click',shopping_commend_show);
	
	
			

	
	/*鼠标滑过背景颜色改变*/
	for(var i=1;i<=6;i++){
		$('shoppingProduct_0'+i).onmouseover=function(){
			this.style.background="#f5f5f5";
		}
		$('shoppingProduct_0'+i).onmouseout=function(){
			this.style.background="#fefbf2";
		}		
	}

	/*删除一行,数值改变*/		
	function getTotal(){	
		var sum = 0,
			save = 0,
			integralTotal = 0;
		var nums = document.getElementsByClassName('shopping_product_list_5');
		var prices = document.getElementsByClassName('shopping_product_list_4');
		var oriPrices = document.getElementsByClassName('shopping_product_list_3');
		var integras = document.getElementsByClassName('shopping_product_list_2');
		for(var i=0; i<nums.length; i++){
			var num = nums[i].getElementsByTagName("input")[0].value;
			var price = prices[i].getElementsByTagName("label")[0].innerHTML;
			var oriPrice = oriPrices[i].getElementsByTagName("label")[0].innerHTML;
			var integra = integras[i].getElementsByTagName("label")[0].innerHTML;
			sum += price * num;
			save += (oriPrice-price) * num;
			integralTotal +=integra * num;
		}
		$('product_total').innerHTML=sum.toFixed(2);
		$('product_save').innerHTML=save.toFixed(2);
		$('product_integral').innerHTML=integralTotal;
	}	
	var dels=document.getElementsByClassName('shopping_product_list_6');
	for(var j=0;j<dels.length;j++){
		dels[j].onclick=function(){		
			if(confirm('是否真的删除窗口？')){
				$('myTableProduct').tBodies[0].removeChild(this.parentNode);
				getTotal();			
			}			
		}
		document.getElementsByClassName('shopping_product_list_5')[j].getElementsByTagName('input')[0].onchange=getTotal;	
	}
	if(dels.length==6){
		getTotal();
	}
}