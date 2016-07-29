// JavaScript Document
//起始设置
$(function() {
	$('#bgcolor').width($(document).width()).height($(document).height());
	$('#head_tag,#ad_animate,.commodity,.commodity_show,.bottom_bg').css('margin-left',($(window).width()-1200)/2);
	$('.ad_pic').css('display','none');
	$('.ad_pic').eq(0).css('display','block');
	$('.ad_li').eq(0).css('background','aqua');
	$('.bottom_bg_2').css('width',$(window).width());
})


//右侧固定登陆模块
$('.fix_logo').mouseover(
          function() 
		  {
			$('.fix_logo').addClass('fix_logo_2');
			$('#login_logo').animate({right:'-10px'},500);
		  });
$('#login_logo').mouseleave(
          function() 
          {
			  $('#login_logo').animate({right:'-180px'},500);
			  $('.fix_logo').removeClass('fix_logo_2');
		  });

//轮播效果
//下标小点切换
$(function() 
{
	var record=0;
	$('.ad_li').hover(function() 
	{
		var index=$(this).index();
		record=index;
		for (var i=0;i<$('.ad_li').length;i++)
		{
			if (i==index)
			{
				$('.ad_pic').eq(i).fadeIn(500);
				$('.ad_li').eq(i).css('background','aqua');
			}
			else
			{
				$('.ad_pic').eq(i).fadeOut();
				$('.ad_li').eq(i).css('background','');
			}
		}
	});
//左侧点击切换	
	$('#change_left img').click(function() 
	  {
		  record--;
		  if (record<0)
		  {record=$('.ad_pic').length-1;}
		  for (var i=0;i<$('.ad_pic').length;i++)
		  {
			  if (i==record)
			  {
				  $('.ad_pic').eq(i).fadeIn(500);
				  $('.ad_li').eq(i).css('background','aqua');
			  }
			  
			  else
			  {
				  $('.ad_pic').eq(i).fadeOut();
				  $('.ad_li').eq(i).css('background','');
			  }
		  }
	});
	  
//右侧点击切换
     $('#change_right img').click(function right_click () 
	{
		record++;
		if (record==$('.ad_pic').length)
		{record=0;}
		for (var i=0;i<$('.ad_pic').length;i++)
		{
			if ((i)==record)
			{
				$('.ad_pic').eq(i).fadeIn(500);
				$('.ad_li').eq(i).css('background','aqua');
			}
			else
			{
				$('.ad_pic').eq(i).fadeOut();
				$('.ad_li').eq(i).css('background','');
			}
		}
		
	});
//自动轮播
var interval=setInterval(function() 
   {
	   if (num<0||num==null)
	   {
		   $('#change_right img').trigger('click')
	   }
   }
   ,5000);
    
//鼠标上浮 停止自动轮播		
	$('.ad_pic').hover(function() 
	{
		clearInterval(interval);
	},
	function () 
	{
		interval=setInterval(function() 
        {$('#change_right img').trigger('click')}
        ,5000);
	});
	
})

//商品框淡入效果
$(function() 
{
	$('.com_pic').hover
	(
		  function() 
		  {
			  $('.color_show').stop(true,false);
			  $('.color_show').eq($(this).index()-1).fadeIn(500);
		  },
		  function() 
		  {
			 $('.color_show').stop(true,false);
			 $('.color_show').eq($(this).index()-1).fadeOut(500);
		  }
	)
});

