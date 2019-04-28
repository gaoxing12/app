$(function(){
	$(".inp_yanz").focus(function(){
		$(this).next().children("span").animate({"width":'100%'},1000);
	});
	$(".inp_yanz").blur(function(){
		$(this).next().children("span").animate({"width":'0'},1000);
	})
//	入口函数
})
