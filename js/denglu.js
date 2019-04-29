$(function(){
	
	$(".inp_yanz").eq(0).focus(function(){
		var textInput=$(this).val();
//		$(this).next().children("span").css({"display":"block"});		
		if(textInput!=""){
			$(this).next().children("span").hide();
			$(this).prev().html("手机号");
		}else{
			$(this).next().children("span").show();
			$(this).next().children("span").animate({"width":'100%'},1000);
		}
	});
	$(".inp_yanz").eq(0).blur(function(){
		$(this).next().children("span").hide();
	});
	$(".inp_yanz").eq(1).focus(function(){
		var textInput=$(this).val();
//		$(this).next().children("span").css({"display":"block"});		
		if(textInput!=""){
			$(this).next().next().children("span").hide();
			$(this).prev().html("密码");
		}else{
			$(this).next().next().children("span").show();
			$(this).next().next().children("span").animate({"width":'100%'},1000);
		}
	});
	$(".inp_yanz").eq(1).blur(function(){
		$(this).next().next().children("span").hide();
	});
	
//	当输入框中出现内容的时候,手机号和密码字样出现
//	var textInput=$(".inp_yanz")[0].val();
	$(".get_code").click(function(){
		mui.toast('手机号不能为空',{ duration:1000, type:'div'})
	}) 
	
//	入口函数
})
