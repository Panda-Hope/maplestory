<?php if (!defined('THINK_PATH')) exit();?><!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>冒险岛商城个人中心</title>
<link href="/Public/CSS/Myhome.css" rel="stylesheet" />
<link rel="stylesheet" href="/Public/CSS/login.css" />
<script type="text/javascript" src="/Public/JS/jquery-1.8.3.min.js"></script>
</head>

<body>
<!--背景图-->
<div id="bgcolor"></div>

<!--头部标题-->
<div id="head_tag">
<div><a href="" id="head_pic"></a></div>
<a href="/index.php/Home/Index/index" id="mxd_logo"><img src="/Public/IMAGES/logo.PNG" /></a>
</div>

<!--右侧固定标志-->
<div class="fix_logo"></div>
<div id="login_logo">
<?php if(isset($_COOKIE['user'])): ?><a href="/index.php/Home/Myhome/index" class="right_pic"><img id="user_photo" title="个人中心" src="/Public/IMAGES/<?php echo (session('photo')); ?>" /></a>
<span></span>
<a href="/index.php/Home/login/quit" class="right_pic" title="退出" >退出</a>
<?php else: ?>
<a href="#1" class="right_pic" id="login_button">登陆</a>
<a href="/index.php/Home/Myhome/register" class="right_pic" target="_blank">注册</a><?php endif; ?>
</div>

<!--个人信息-->
<div class="msg_body">
<div class="head_photo">
<div class="myphoto" >
<img id="current_photo" title="更换头像" src="/Public/IMAGES/<?php echo (session('photo')); ?>" />
<img class="change_photo" title="更换头像" src="/Public/IMAGES/maplestory.png" />
<img class="change_photo" title="更换头像" src="/Public/IMAGES/20150901213615.png" />
<img class="change_photo" title="更换头像" src="/Public/IMAGES/20150901213416.jpg" />
<img class="change_photo" title="更换头像" src="/Public/IMAGES/num4_pic.png" />
<img class="change_photo" title="更换头像" src="/Public/IMAGES/num3_pic.png" />
</div>
<span class="time_msg"><?php echo ($msg); ?>:<?php echo (session('user')); ?></span>
<canvas id="canvas"></canvas>
</div>
<div class="msg_list">
<a href="javascript:" class="user_msg">个人资料</a>
<a href="javascript:" class="user_msg">修改密码</a>
<a href="javascript:" class="user_msg">收货地址</a>
<a href="javascript:" class="user_msg">订单记录</a>
<a href="javascript:" class="user_msg">消息中心</a>
<a href="javascript:" class="user_msg">个性服务</a>
</div>

<iframe src="/index.php/Home/Myhome/usermsg" frameborder="1" id="iframe_msg">
</iframe>
</div>

<script type="text/javascript" src="/Public/JS/digit.js"></script>
<script type="text/javascript" src="/Public/JS/Myclock.js"></script>
<script type="text/javascript">
var module='/index.php/Home';
var url='/index.php/Home/Myhome';
</script>
<script type="text/javascript" src="/Public/JS/Myhome.js"></script>
<script type="text/javascript" src="/Public/JS/login.js"></script>
</body>
</html>