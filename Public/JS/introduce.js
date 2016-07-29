// JavaScript Document
//初始设置
$(function() 
{
	$('#black_cover_2').width($(document).width()).height($(document).height());
	$('#login_window_2').css('left',($(window).width()-400)/2);
	$('#login_window_2').css('top',$(window).height()*0.10);
});

//商品详情窗口出现
$('.button_buy').click(function() 
{
	$('#black_cover_2').fadeIn(500);
	$('#login_window_2').fadeIn(500);
});

//商品详情窗口关闭
$('#close_pic_2').click(function() 
{
	$('#black_cover_2').fadeOut(500);
	$('#login_window_2').fadeOut(500);
});

//商品信息AJAX
$('.button_buy').click(function() 
{
	$.post
	(
	   url+'/msgajax',
	   {name:$(this).find('input').val()},
	   function (msg) 
	   {
		   $('.returnmsg').eq(0).attr('src',image+msg.path);
		   $('.returnmsg').eq(1).html(msg.name);
		   $('.returnmsg').eq(2).html(msg.price);
		   $('#car').val(msg.name);
	   }
	);
});

//商品购买
$('.car_href').eq(0).click(function() 
{
	$.post(
	url+'/paycheck',
    {},
	function(msg) 
	{
		if (msg.login==0)
		{alert('请先登陆')}
		else if (msg.addr==0)
		{
			var auth=confirm("您还没有设置收货地址现在去个人中心设置吗");
			if (auth)
			{location=module+'/Myhome/index';}
			else
			{return false;}
		}
		else if (msg.car==0)
		{$('#timo').trigger('submit');}
		else
		{
			var auth=confirm("您的购物车中仍有商品需要一起结算吗");
			if (auth)
			{
				$.post(url+'/caradd',
				       {name:$('#carname').html()},
					   function(msg) 
					   {
						   if (msg)
						   {location=url+'/paymoney';}
						   else
						   {购买失败}
					   });
			}
			else
			{$('#timo').trigger('submit');}
		}
	});
});

//购物车添加
$('.car_href').eq(1).click(function() 
{
	$.post(
	url+'/CarAdd',
	{name:$('.returnmsg').eq(1).html()},
	function(msg) 
	{
		if (msg)
		{alert('添加成功');location=location;}
		else
		{alert('添加失败');}
	}
	);
});