// JavaScript Document
//初始设置
$(function() {
	$('#bgcolor').width($(document).width()).height($(document).height());
	$('#head_tag,#ad_animate,.commodity,#search_div').css('margin-left',($(window).width()-1200)/2);
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
		  }
);

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

//放大镜
$('#fangdajing').toggle(
function() 
{
	$('#search_div').stop(true,false);
	$('#search_div').animate({width:'500px'},1000);
},
function() 
{
	$('#search_div').stop(true,false);
	$('#search_div').animate({width:'100px'},1000);
});

$('#search_button button').click(function() 
{
	$('#search').trigger('submit');
});

