$(function(){
		$(document).scroll(function(){
		var gHidtop = $(this).scrollTop();
		if(gHidtop>=50){
			$(".yinka_vip").css({"display":"block"});
//			console.log("aa");
		}
		else{
			$(".yinka_vip").css({"display":"none"});		
		}
//		console.log(gHidtop);
	});
});
	var gallery = mui('.mui-slider');
	gallery.slider({
	  interval:2000//自动轮播周期，若为0则不自动播放，默认为0；
	});