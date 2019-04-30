$(function(){
	//	弹性窗口
(function($){
        $(".mui-scroll-wrapper").scroll({
              bounce: true,//滚动条是否有弹力默认是true
              indicators: false, //是否显示滚动条,默认是true
//      	$('.mui-bar-transparent').transparent();
        });
})(mui);

//	点击头部的会员码,出现登录页面
	$(".jiFen").bind("tap",function(e){
		e.preventDefault();
		mui.openWindow({
			url:"integrals.html",
			id:"jiFen",
			styles:{
				duration:1000
			},
//			show:{
//				aniShow:'slide-in-bottom'
//			}
		});
	});
})
