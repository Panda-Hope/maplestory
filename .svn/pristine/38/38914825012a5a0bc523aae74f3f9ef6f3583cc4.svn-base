<?php if (!defined('THINK_PATH')) exit();?><!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>MapleStory后台管理系统</title>
<link href="/Public/CSS/admin.css" rel="stylesheet" />
<script type="text/javascript" src="/Public/JS/jquery-1.8.3.min.js"></script>
</head>

<body>
<!--背景图-->
<div id="bgcolor"></div>

<!--主体页面-->
<div class="body">
<p class="title">管理员名称：<span><?php echo (session('adminname')); ?></span>&nbsp;&nbsp;管理员等级：<span><?php echo (session('adminlevel')); ?></span><a href="/admin.php/Home/Index/tuichu" id="tuichu">退出</a></p>
<div class="msg_list">
<a href="javascript:" class="user_msg">用户管理</a>
<a href="javascript:" class="user_msg">广告管理</a>
<a href="javascript:" class="user_msg">商品管理</a>
<a href="javascript:" class="user_msg">订单管理</a>
<a href="javascript:" class="user_msg">论坛管理</a>
<a href="javascript:" class="user_msg">统计管理</a>
<a href="javascript:" class="user_msg">日志管理</a>
</div>

<!--iframe-->
<iframe src="/admin.php/Home/Index/UserControll" id="iframe_msg" frameborder="1"></iframe>
</div>
<script type="text/javascript" src="/Public/JS/admin.js"></script></body>
</html>