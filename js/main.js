	var gallery = mui('.mui-slider');
	gallery.slider({
	  interval:2000//自动轮播周期，若为0则不自动播放，默认为0；
	});

$(function(){	
	$(document).scroll(function(){
		var gHidtop = $(this).scrollTop();
		if(gHidtop>=100){
			$(".vip").children("span").css({"color":"#000"});
			$(".saoyisao").children("span").css({"color":"#000"});
//			console.log("aa");
		}
		else{
			$(".vip").children("span").css({"color":"#fff"});
			$(".saoyisao").children("span").css({"color":"#fff"});
		}
//		console.log(gHidtop);
	});
	
	
//	二维码扫一扫
	$(".scan").bind("tap",function(e){
		e.preventDefault();
		mui.openWindow({
			url:"erweima.html",
			id:"scan",
			styles:{
				duration:300
			}
		});
	});
	
//	点击头部的会员码,出现登录页面
	$(".vip").bind("tap",function(e){
		e.preventDefault();
		mui.openWindow({
			url:"html/denglu.html",
			id:"vip",
			styles:{
				duration:1000
			},
			show:{
				aniShow:'slide-in-bottom'
			}
		});
	});
//	弹性窗口
(function($){
        $(".mui-scroll-wrapper").scroll({
              bounce: true,//滚动条是否有弹力默认是true
              indicators: false, //是否显示滚动条,默认是true
//      	$('.mui-bar-transparent').transparent();
        });
})(mui);
});