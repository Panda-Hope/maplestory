// JavaScript Documents
//初始设置
$(function() {
	$('.shoppingcar,.allcommodity').css('right',($(window).width()-800)/2);
})

//购物车窗口下拉
$('.showcar').toggle(function() 
{
	$('.allcommodity').stop(false,true);
	$('.allcommodity').slideUp(500);
},
function() 
{
	$('.allcommodity').stop(false,true);
    $('.allcommodity').slideDown(500);	
});

//结算AJAX
$('.jiesuan').click(function() 
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
		else 
		{location=url+'/paymoney';}
    });
});