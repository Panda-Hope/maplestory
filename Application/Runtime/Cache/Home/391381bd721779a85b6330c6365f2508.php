<?php if (!defined('THINK_PATH')) exit();?>﻿
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>欢迎来到冒险岛</title>

<link rel="stylesheet" href="/Public/CSS/login.css"/>
<link rel="stylesheet" href="/Public/CSS/liu.css" />
<script type="text/javascript" src="/Public/JS/jquery-1.8.3.min.js"></script>
<script type="text/javascript" src="/Public/plugin/WdatePicker.js"></script>
	<script type="text/javascript" src="/Public/editor/ueditor.config.js"></script>
	<script type="text/javascript" src="/Public/editor/ueditor.all.min.js"></script>
</head>

<body >
<canvas id="canvas">您的浏览器版本过低</canvas>
<canvas id="canvas_2">您的浏览器版本过低</canvas>
<!--背景图-->
<div id="bgcolor"></div>
<!--头部标题-->
<div id="head_tag">
<div><a href="/index.php/Home/liu/liushuo" id="head_pic"></a></div>
<a href="/index.php/Home/index/index" id="mxd_logo"><img src="/Public/IMAGES/logo.PNG" /></a>
</div>
<!--右侧固定标志-->
<div class="fix_logo"></div>
<div id="login_logo">
<?php if(isset($_COOKIE['user'])): ?><a href="/index.php/Home/liu/index" class="right_pic"><img id="user_photo" title="<?php echo (session('user')); ?>" src="/Public/IMAGES/<?php echo (session('photo')); ?>" /></a>
<span></span>
<a href="/index.php/Home/login/quit" class="right_pic" title="退出" >退出</a>
<?php else: ?>
<a href="#1" class="right_pic" id="login_button">登陆</a>
<a href="/index.php/Home/Liu/register" class="right_pic" target="_blank">注册</a><?php endif; ?>
</div>
<div id='black_cover'></div>
<div id="login_window">
<div>
<a href="javascript:" id="close_pic"><img src="/Public/IMAGES/close.png" /></a>
<table height="300">
<form id='login_form' action="/index.php/Home/liu/index" method="post">
<tr><td align="center" colspan="2"><h1 id="dl">Maple Story</h1></td></tr>
<tr><td class="prefix">用户名:</td><td><input class='text' type="text" name="user"/></td></tr>
<tr><td class="prefix">密码:</td><td><input class='text' type="password" name="password" /></td></tr>
<tr><td colspan="2"><a href="javascript:" id="submit">登陆</a></td></tr>
</form>
</table>
</div>
</div>
<div style="width:80%;margin:50px auto;background:#fff;background:transparent;background-color:rgba(255,255,255,0.75);">

<table  border="0" cellspacing="0" cellpadding="0">
<tr><td colspan="2"><a href="/index.php/Home/liu/fabao"><img src="/Public/IMAGES/14406413869259.jpg" class="imgs" width="100%" height="250px" /><span style="position:absolute;top:250px;right:15%;font-size:40px;color:#FFF;">综合交流区</span></a></td></tr>
<tr>
<td></td>
<td style="color:#F0F;text-align:left;"><h3 >[标题]：<?php echo ($data["content"]); ?></h3></td>
</tr>
<tr>
<td id="tuan"><img src="/Public/IMAGES/<?php echo ($data["photo"]); ?>" width="100px" height="100px"/><br/>楼主:<?php echo ($data["name"]); ?></td>
<td id="tuan1"><span><h4 style="color:#36F;">[内容]：</h4><?php echo ($data["iner"]); ?></span>
<span class="sj">发表时间：<?php echo ($data["sj"]); ?></span></td>
</tr>
</tr>
<tr>
<?php if(is_array($arrdata)): foreach($arrdata as $key=>$value): ?><td id="tuan"><img src="/Public/IMAGES/<?php echo ($value["photo"]); ?>" width="100px" height="100px"/><br/><?php echo ($value["uuser"]); ?></td>
<td id="tuan1"><?php echo ($value["iners"]); ?><span class="sj">评论时间：<?php echo ($value["sj"]); ?></span></td>
</tr><?php endforeach; endif; ?>
</table> 

<div id="fa">
<form action="/index.php/Home/Liu/ardd/id/<?php echo ($data["id"]); ?>/content/<?php echo ($data["content"]); ?>" method="post" enctype="multipart/form-data">

<script id="bjq" name="editorValue"></script>
<div class="ding"><input type="hidden" name="sj"/>
<input type="hidden" name="diaoji" value="游戏"/>
<input type="submit" name="submit" value="发表评论" class="de"/>
</div>
</form>
</div>
</div>
<!--底部背景图-->
<div id="bottom_bgcolor">
<div class="bottom_bg"></div>
</div>

<!--底部介绍-->
<div class="bottom_bg_2">
</div>
<script type="text/javascript">
		UE.getEditor("bjq");
	</script>
<script type="text/javascript" src="/Public/JS/Head.js"></script>
<script type="text/javascript">
var module='/index.php/Home';
</script>
<script type="text/javascript" src="/Public/JS/login.js"></script>
</body>
</html>