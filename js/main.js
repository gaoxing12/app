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
	})
});