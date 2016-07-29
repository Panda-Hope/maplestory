// JavaScript Document
//初始设置
$(function() 
{
	$('#bgcolor').width($(document).width()).height($(document).height());
	$('#head_tag,.msg_body').css('margin-left',($(window).width()-1200)/2);
});

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

//ifram切换
$(function() 
{
	var iframe=['usermsg','changepassword','useraddr','order','information','cuteserver'];
	$('.user_msg').click(function() 
	{
		$('#iframe_msg').attr('src',iframe[$(this).index()]);
	});
});

//头像弹出
$('#current_photo').toggle(function()                          
{
	$('.myphoto').stop(false,true);
	$('.myphoto').animate({width:'800px'},700);
},
function() 
{
	$('.myphoto').stop(false,true);
	$('.myphoto').animate({width:'102px'},800);
});

//头像更换
$('.change_photo').click(function() 
{
	var auth=confirm('确定使用此头像吗');
	if (auth)
	{
		var pic=['maplestory.png','20150901213615.jpg','20150901213416.jpg','num4_pic.png','num3_pic.png'];
		$.post(
		url+'/changephoto',
		{photo:pic[$(this).index()-1]},
		function(msg) 
		{
			if (msg)
			{
				alert('更换成功');
				location=location; 
			}
			else
			{alert('更换失败');}
		});
		
	}
	else
	{return false;}
});
