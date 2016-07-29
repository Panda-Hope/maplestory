<?php if (!defined('THINK_PATH')) exit();?><!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>商品支付</title>
<link rel="stylesheet" href="/Public/CSS/commodity.css" />
<link rel="stylesheet" href="/Public/CSS/login.css" />
<link rel="stylesheet" href="/Public/CSS/pay.css" />
<script type="text/javascript" src="/Public/JS/jquery-1.8.3.min.js"></script>
</head>

<body>
<!--背景图-->
<div id="bgcolor"></div>

<!--头部标题-->
<div id="head_tag">
<div><a href="/index.php/Home/liu/liushuo" id="head_pic"></a></div>
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
<a href="/index.php/Home/Index/register" class="right_pic" target="_blank">注册</a><?php endif; ?>
</div>

<!--支付界面-->
<div class="main_div">
<p class="user_name">欢迎您：<?php echo (session('user')); ?></p>
<table class="pay_table">
<tr><td>商品数量</td><td>商品名称</td><td>商品价格</td><td>商品图片</td></tr>
<?php if(is_array($array)): foreach($array as $key=>$vo): ?><tr><td>1</td><td><?php echo ($vo["carname"]); ?></td><td><span class="pay_money"><?php echo ($vo["carprice"]); ?></span></td><td><img src="/Public/IMAGES/<?php echo ($vo["carphoto"]); ?>" /></td></tr><?php endforeach; endif; ?>
<tr><td></td><td></td><td></td>
<td>
<p class="addr_city">收货地址：<?php echo ($addr['shengfen']); echo ($addr['city']); ?></p>
<div class="addr_street">
街道：<?php echo ($addr['street']); ?>
</div>
</td></tr>
<tr><td></td><td></td><td></td><td style="text-align:left">总价共:<span class="pay_money"><?php echo ($sum_price); ?></span>点卷 实付:<span class="pay_money"><?php echo ($sum_price/100); ?></span>元</td></tr>
<tr><td></td><td></td><td></td><td class="click_a"><a href="javascript:">确认付款</a></td></tr>
</table>
<form method="post" action="/index.php/Home/Pay/send" id="form_pay">
<input type="hidden" name="je" value="<?php echo ($sum_price/100); ?>" />
</form>
</div>

<script type="text/javascript" src="/Public/JS/pay.js"></script>
<script type="text/javascript" src="/Public/JS/commodity.js"></script>
</body>
</html>