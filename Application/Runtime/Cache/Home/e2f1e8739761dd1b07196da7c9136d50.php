<?php if (!defined('THINK_PATH')) exit();?><!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>账号注册</title>
<link href="/Public/CSS/register.css" rel="stylesheet" />
<script type="text/javascript" src="/Public/JS/jquery-1.8.3.min.js"></script>
</head>

<body>
<div class='bg_pic'></div>
<img id='bg_pic_2' src="/Public/IMAGES/small_menu2014.png" usemap='#float_pic' />
<map name="float_pic">
<area shape="rect" coords="25,86,140,130" alt='首页' href="/index.php/Home/Index/index">
</map>

<img id='bg_pic_3' src="/Public/IMAGES/top_menu_2014.png" name='head' usemap='#title_pic'  />
<map name="title_pic">
<area shape="rect" coords="40,0,139,60" alt='首页' href="/index.php/Home/Index/index">
<area shape="rect" coords="170,0,280,60" alt='注册' href="/index.php/Home/Index/register">
</map>

<table id="table">
<form action="/index.php/Home/Index/deal" method="post" id="form">
<tr><td>用户名：</td><td><input class='form_data' name='user' maxlength="10" type="text" /></td><td><span class="msg"></span></td></tr>
<tr><td>密码：</td><td><input class='form_data' name='password' type="password" /></td><td><span class="msg"></span></td></tr>
<tr><td>确认密码：</td><td><input class='form_data' name="password_2" maxlength="15" type="password" /></td><td><span class="msg"></span></td></tr>
<tr><td>手机号：</td><td><input class='form_data' name='phone' maxlength="11" type="text" /></td><td><span class="msg"></span></td></tr>
<tr><td>邮箱：</td><td><input class='form_data' name='mail' maxlength="20" type="text" /></td><td><span class="msg"></span></td></tr>
<tr><td style="text-align:left;"><img id='verify_code' src="/index.php/Home/Index/verify" /></td><td><input class='form_data' name='valicode' type="text" placeholder="验证码" /></td><td><span class="msg"></span></td></tr>
<tr><td colspan='3' align="center"><a id='register' href="javascript:">注册</a></td></tr>
</form>
</table>
<script type="text/javascript">
var url="/index.php/Home/Index";
</script>
<script type="text/javascript" src="/Public/JS/register.js"></script>
</body>
</html>