//放大镜
$('.head_glass').hover(function(){
	$('#headSreach').animate({width:'170px'},200);
},function(){
	$('#headSreach').animate({width:'0px'},200).css('display','none');
})
//===================
//APP 鼠标放上去和鼠标离开的时候的效果
var wrap_img = document.querySelector('.wrap_tu img');
$('.wrap_tu').mouseover(function(){
	$(wrap_img).css('top','-4px');
});
$('.wrap_tu').mouseout(function(){
	$(wrap_img).css('top','0px');
});
//头部隐藏显示框
$(document).ready(function(){
	//当鼠标元素穿过时 事件
   $(".head_title .head .special").mouseenter(function(){
   	$(this).find('.additional').slideDown(300);
   	$(this).css({"background-color":"white"});
   })
   $(".head_title .head .special").mouseleave(function(){
   	$(this).find(".additional").slideUp(300);
    $(this).css({"background-color":""});
   })
})
//中部分类菜单
$(".nav_left ul li").mouseenter(function(){
	$(this).find('.nav_right').show();
	$(this).addClass('li-color').siblings().removeClass('li-color')
});
$(".nav_left ul li").mouseleave(function(){
	$(this).find('.nav_right').hide();
	$(this).removeClass('li-color')
})
//中部轮播效果
// JavaScript Document
window.onload=function(){
	/*---图片切换与按钮事件---*/
	var current_index=0;
	var banner_pics=document.getElementById("banner_pic").getElementsByTagName("div");
	console.log('banner_pics===>',banner_pics)
	var buttons=document.getElementById("button").getElementsByTagName("span");
	var butSize=buttons.length;
	var timer=window.setInterval(change,1000);
	//遍历（轮播按钮数组）元素
	for(var i=0;i<butSize;i++){
		//添加鼠标滑过事件
		buttons[i].onmouseover=function(){
			if(timer){
				window.clearInterval(timer);
			}
			//循环遍历元素
			for(var j=0;j<butSize;j++){
			//将当前索引对应的元素设置为显示（即按钮数值与鼠标指向值相等）
				if(buttons[j]===this){
					current_index=j;	//焦点索引从当前位置开始（当鼠标移出时）
					banner_pics[j].className="current";
					buttons[j].className="current";
				}else{	//将所有元素改变样式
					banner_pics[j].className="pic";
					buttons[j].className="";
				}
			}
		};
		//鼠标移出事件
		buttons[i].onmouseout=function(){
			//启动定时器，恢复自动切换
			timer=setInterval(change,1000);
		};
		
		banner_pics[i].onmouseover=function(){
			window.clearInterval(timer);
		};
		banner_pics[i].onmouseout=function(){
			timer=window.setInterval(change,1000);
		};
	}
	
	//自动轮播方法
	function change(){
		current_index++;
		if(current_index===butSize){
			current_index=0;
		}
		for(var i=0;i<butSize;i++){
			if(i===current_index){
				banner_pics[i].className="current";
				buttons[i].className="current";
			}else{
				banner_pics[i].className="pic";
				buttons[i].className="";
			}
		}	
	}
};