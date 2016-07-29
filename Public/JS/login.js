// JavaScript Document
//初始设置
$(function() 
{
	$('#black_cover').width($(document).width()).height($(document).height());
	$('#login_window ').css('left',($(window).width()-600)/2);
	$('#login_window ').css('top',$(window).height()*0.10);
});

//登陆窗口出现
$('#login_button').click(function() 
{
	$('#black_cover').fadeIn(500);
	$('#login_window').fadeIn(500);
});

//登陆窗口关闭
$('#close_pic').click(function() 
{
	$('#black_cover').fadeOut(500);
	$('#login_window').fadeOut(500);
});

//登陆AJAX检测
$('#submit').click(function()　
{
	$.post(
	    module+'/Login/check',
	    {
			'user':$('.text').eq(0).val(),
	        'password':$('.text').eq(1).val()
		},
		function(msg) 
		{
			if (!msg)
			{alert('账户或密码错误');}
			else
			{$('#login_form').trigger('submit');}
		});
});
