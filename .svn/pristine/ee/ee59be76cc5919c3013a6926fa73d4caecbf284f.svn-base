<?php if (!defined('THINK_PATH')) exit();?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>欢迎来到冒险岛</title>

<link rel="stylesheet" href="/Public/CSS/login.css"/>
<link rel="stylesheet" href="/Public/CSS/liu1.css" />
<script type="text/javascript" src="/Public/JS/jquery-1.8.3.min.js"></script>
<script type="text/javascript" src="/Public/plugin/WdatePicker.js"></script>
<script type="text/javascript" src="/Public/editor/ueditor.config.js"></script>
<script type="text/javascript" src="/Public/editor/ueditor.all.min.js"></script>

</head>

<body>
<canvas id="canvas">您的浏览器版本过低</canvas>
<canvas id="canvas_2">您的浏览器版本过低</canvas>
<!--背景图-->
<div id="bgcolor"></div>
<!--头部标题-->

<div id="head_tag">
<div><a href="/index.php/Home/liu/liushuo" id="head_pic"></a></div>
<a href="/index.php/Home/index/index" id="mxd_logo"><img src="/Public/IMAGES/logo.PNG" /></a>
</div>
<div class="fix_logo"></div>
<div id="login_logo">
<?php if(isset($_COOKIE['user'])): ?><a href="/index.php/Home/liu/fabao" class="right_pic"><img id="user_photo" title="<?php echo (session('user')); ?>" src="/Public/IMAGES/<?php echo (session('photo')); ?>" /></a>
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
<form id='login_form' action="/index.php/Home/liu/liushuo" method="post">
<tr><td align="center" colspan="2"><h1 id="dl">Maple Story</h1></td></tr>
<tr><td class="prefix">用户名:</td><td><input class='text' type="text" name="user"/></td></tr>
<tr><td class="prefix">密码:</td><td><input class='text' type="password" name="password" /></td></tr>
<tr><td colspan="2"><a href="javascript:" id="submit">登陆</a></td></tr>
</form>
</table>
</div>
</div>
<div style="width:80%;height:40px;margin:2px auto;line-height:40px;"></div>
<div style="width:80%;margin:0px auto;background:#fff;background:transparent;background-color:rgba(255,255,255,0.75);">

<table  border="0" cellspacing="0" cellpadding="0">

<tr>
<td style="position:relative;"><a href="/index.php/Home/liu/fabao"><img src="/Public/IMAGES/14406413869259.jpg" class="imgs" width="100%" height="250px" /><span style="position:absolute;top:60px;right:5%;font-size:40px;color:#FFF;">综合交流区</span></a></td>
</tr>

<tr>
<td style="position:relative;"><a href="/index.php/Home/liu/xiaofa"><img src="/Public/IMAGES/vMxJ92yhfge0Qejup0.jpg" class="imgs" width="99%" height="250px"/><span style="position:absolute;top:60px;right:5%;font-size:40px;color:#FFF;">游戏商城问答区</span></a></td>
</tr>

</table> 
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