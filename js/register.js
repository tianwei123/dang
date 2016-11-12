window.onload=function(){
	function $(id){
		return document.getElementById(id);
	}	
	
	/*省市级联*/
	var province=['北京','湖北省','广东省','福建省'];
	province['北京']=['朝阳区','东城区','海淀区','怀柔区'];
	province['湖北省']=['武汉市','宜昌市','荆州区','襄阳区'];
	province['广东省']=['广州市','中山市','佛山市','阳江市'];
	province['福建省']=['福州市','厦门市','漳州市','泉州市'];
	addProvince();
	
	function addProvince(){	
		for(var t=0;t<province.length;t++){
			var pro=document.createElement("option");
			pro.value=province[t];
			pro.innerHTML=province[t];
			$('province').appendChild(pro);
		}		
	}
	$('province').onchange=function(){
		$('city').options.length=1;
		for(var t=0;t<province[this.value].length;t++){
			var c=document.createElement('option');
			c.value=province[this.value][t];
			c.innerHTML=province[this.value][t];
			$('city').appendChild(c);
		}
	}
	
	
	
	/*信息检测*/
	function emailBlur(){
		if(this.value==''){
			$('email_prompt').innerHTML="电子邮件是必填项，请输入您的Emai地址";
			$('email_prompt').style.border='1px solid #999';
		}else{
			var e=/^([\w\.\-]+)@([\w\.\-]+)\.([\w]{2,4})$/;
			if(!e.test(this.value)){
				$('email_prompt').innerHTML="电子邮件格式不正确";	
				$('email_prompt').style.border='1px solid #999';
			}
		}
	}
	function emailFocus(){
		$('email_prompt').innerHTML='';
		$('email_prompt').style.border='none';
	}
	function nickNameBlur(){
		if(this.value==''){
			$('nickName_prompt').innerHTML='昵称为必填项，请输入您的昵称';
			$('nickName_prompt').style.border='1px solid #999';
		}else{
			var nick=/^\w+$/;
			if(!nick.test(this.value)){
				$('nickName_prompt').innerHTML='昵称只可包含a-z,0-9和_';
				$('nickName_prompt').style.border='1px solid #999';
			}
		}
	}
	function nickNameFocus(){
		$('nickName_prompt').innerHTML='';
		$('nickName_prompt').style.border='none';
	}
	function pwdBlur(){
		if(this.value==''){
			$('pwd_prompt').innerHTML='密码为必填项，请输入您的密码';
			$('pwd_prompt').style.border='1px solid #999';
		}else{
			var pwd=/^\w{6,}$/;
			if(!pwd.test(this.value)){
				$('pwd_prompt').innerHTML='密码不能少于6位';
				$('pwd_prompt').style.border='1px solid #999';
			}
		}
	}
	function pwdFocus(){
		$('pwd_prompt').innerHTML='';
		$('pwd_prompt').style.border='none';
	}
	function repwdBlur(){
		if(this.value==''){
			$('repwd_prompt').innerHTML='请再次输入您的密码';
			$('repwd_prompt').style.border='1px solid #999';
		}else{
			if(this.value!=$('pwd').value){
				$('repwd_prompt').innerHTML='两次输入的密码不一致';
				$('repwd_prompt').style.border='1px solid #999';
			}
		}
	}
	function repwdFocus(){
		$('repwd_prompt').innerHTML='';
		$('repwd_prompt').style.border='none';
	}
	
	$('email').addEventListener('blur',emailBlur);
	$('email').addEventListener('focus',emailFocus);
	$('nickName').addEventListener('blur',nickNameBlur);
	$('nickName').addEventListener('focus',nickNameFocus);
	$('pwd').addEventListener('blur',pwdBlur);
	$('pwd').addEventListener('focus',pwdFocus);
	$('repwd').addEventListener('blur',repwdBlur);
	$('repwd').addEventListener('focus',repwdFocus);

}
