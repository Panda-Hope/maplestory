// JavaScript Document
$(function() 
{	
	$('#table').css('margin-top','350px');
	$('td').not($('td').last()).css('text-align','right').css('color','#666');
});
var user=false;
var password=false;
var phone=false;
var mail=false;
var code=false;
//验证码切换
$('#verify_code').click(function() 
{
	$(this).attr('src',url+'/verify?math='+Math.random());
});

//表单验证及AJAX验证

//用户名验证
$('.form_data').eq(0).blur(function() 
{
	
	if ($(this).val()==''||$(this).val()=='&nbsp;')
	{$('.msg').eq(0).html('用户名不能为空').css('color','#FC6E73');user=false;}
	else
	{
		$.post(url+'/check_user',
		{user:$(this).val()},
		function(msg) 
		{
			if (msg)
			{
				$('.msg').eq(0).html('用户名已注册').css('color','#FC6E73');
				user=false;
			}
			else
			{$('.msg').eq(0).html('OK').css('color','#31EE74');user=true;}
		});
	}
});

//密码验证
$('.form_data').eq(1).blur(function() 
{
	if ($(this).val().length<4)
	{$('.msg').eq(1).html('密码太弱').css('color','#FC6E73');password=false;}
	else
	{$('.msg').eq(1).html('OK').css('color','#31EE74');password=true;}
});

$('.form_data').eq(2).blur(function() 
{
	if ($(this).val()!=$('.form_data').eq(1).val()||$(this).val().length<1)
	{$('.msg').eq(2).html('密码不一致').css('color','#FC6E73');password=false;}
	else
	{$('.msg').eq(2).html('OK').css('color','#31EE74');password=true;}
});

//手机验证
$('.form_data').eq(3).blur(function() 
{
	
	if (!$(this).val().match(/^1[3,5,4,6,8]\d{9}$/))
	{$('.msg').eq(3).html('手机号错误').css('color','#FC6E73');phone=false;}
	else
	{
		$.post(url+'/check_phone',
		{phone:$(this).val()},
		function(msg) 
		{
			if (msg)
			{
				$('.msg').eq(3).html('号码已注册').css('color','#FC6E73');
				phone=false;
			}
			else
			{$('.msg').eq(3).html('OK').css('color','#31EE74');phone=true;}
		});
	}
});

//邮箱验证
$('.form_data').eq(4).blur(function() 
{
	
	if (!$(this).val().match(/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/))
	{$('.msg').eq(4).html('邮箱格式错误').css('color','#FC6E73');mail=false;}
	else
	{
		$.post(url+'/check_mail',
		{mail:$(this).val()},
		function(msg) 
		{
			if (msg)
			{$('.msg').eq(4).html('邮箱已注册').css('color','#FC6E73');mail=false;}
			else
			{$('.msg').eq(4).html('OK').css('color','#31EE74');mail=true;}
		});
	}
});

//验证码验证
$('.form_data').eq(5).blur(function() 
{
	$.post(url+'/check_verify',
	{code:$(this).val()},
	function(msg) 
	{
		if (msg)
		{$('.msg').eq(5).html('OK').css('color','#31EE74');code=true;}
		else
		{$('.msg').eq(5).html('验证码错误').css('color','#FC6E73');code=false;}
	});
});

$('#register').click(function() 
{
	for (var i=0;i<6;i++)
	{$('.form_data').eq(i).trigger('blur')}
	if (user&&password&&phone&&mail&&code)
	{$('#form').trigger('submit');}
	else
	{return false;}
});
