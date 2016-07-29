// JavaScript Document
//验证码切换

$('#verify_code').click(function() 
{
	$(this).attr('src',url+'/verify?math='+Math.random()*10);
});