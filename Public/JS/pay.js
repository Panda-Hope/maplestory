// JavaScript Document
//初始设置
$(function() {
	$('.main_div').css('margin-left',($(window).width()-1200)/2);
});

//支付
$('.click_a').click(function() 
{
	$('#form_pay').trigger('submit');
});

