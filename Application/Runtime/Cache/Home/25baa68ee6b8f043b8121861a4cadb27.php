<?php if (!defined('THINK_PATH')) exit();?><!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>冒险岛商城 宠物中心商品</title>
<link rel="stylesheet" href="/Public/CSS/commodity.css" />
<link rel="stylesheet" href="/Public/CSS/login.css" />
<link rel="stylesheet" href="/Public/CSS/introduce.css" />
<link rel="stylesheet" href="/Public/CSS/shoppingcar.css" />
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

<!--购物车标签-->
<div class="shoppingcar"> 
<a href="javascript:" class="showcar">
<img src="/Public/IMAGES/cart.png" />
我的购物车
</a>
</div>
<!--购物车内容-->
<div class="allcommodity">
<?php if(!empty($array)): if(is_array($array)): foreach($array as $key=>$value): ?><div class='mycommodity'>
<p><img src="/Public/IMAGES/<?php echo ($value['carphoto']); ?>" /></p>
<p><?php echo ($value['carname']); ?></p><p><?php echo ($value['carprice']); ?></p>
<p><a href="/index.php/Home/Pay/clear?key=<?php echo ($value[0]); ?>" class="clearcar">清空</a></p>
</div><?php endforeach; endif; ?>
<p class="function"><a href='javascript:' class='jiesuan'>去结算</a></p></p>
<?php else: ?>
<p class="empty_p">暂无商品</p><?php endif; ?>
</div>

<!--登陆界面-->
<div id='black_cover'></div>
<div id="login_window">
<a href="javascript:" id="close_pic"><img src="/Public/IMAGES/close.png" /></a>
<table height="300" id="table1">
<form id='login_form' action="/index.php/Home/Pay/index" method="post">
<tr><td align="center" colspan="2"><h1 id="dl">Maple Story</h1></td></tr>
<tr><td class="prefix">用户名:</td><td><input class='text' type="text" name="user"/></td></tr>
<tr><td class="prefix">密码:</td><td><input class='text' type="password" name="password" /></td></tr>
<tr><td colspan="2"><a href="javascript:" id="submit">登陆</a></td></tr>
</form>
</table>
</div>

<!--搜索框-->
<div id="search_div">
<a href="javascript:" id="fangdajing"><img src="/Public/IMAGES/magnifier27.png" /></a>
<div id="search_form">
<form action="/index.php/Home/Pay/search" method="post" id="search">
<input type="text" name="search" />
</form>
</div>
<div id="search_button">
<button>搜索</button>
</div>
</div>

<!--商品部分-->
<div class="commodity">
<p id="com_title">宠物中心</p>
<?php if(is_array($cwzx_path)): foreach($cwzx_path as $key=>$vo): ?><div class="com_pic">
<div class="color_show"></div>
<a href=""><img class='com_gif' src="/Public/IMAGES/<?php echo ($vo["path"]); ?>" /></a>
<span class="com_span1">
<a href=""  class="query_name"><?php echo ($vo["name"]); ?></a>
</span>
<span class="com_span2">
<img src="/Public/IMAGES/dot.gif" />
<span><?php echo ($vo["price"]); ?>点</span>
</span>
<span class="com_span3">
<a href="/index.php/Home/Pay/shoppingcwzx/carname/<?php echo ($vo["name"]); ?>" class="button_carxxx"><img src="/Public/IMAGES/cart.png" /></a>
<a href="javascript:" class="button_buy">购买
<input type="hidden" value="<?php echo ($vo["name"]); ?>" />
</a>
</span>
</div><?php endforeach; endif; ?>
<p id="teshu"><?php echo ($msg); ?></p>
</div>

<!--商品购买/购物车-->
<div id='black_cover_2'></div>
<div id="login_window_2">
<a href="javascript:" id="close_pic_2"><img src="/Public/IMAGES/close.png" /></a>
<p class="pay_title">MapleStory</p>
<table id="table2">
<tr><td colspan="2"><img class='returnmsg' src="" /></td></tr>
<tr><td>商品名称：</td><td class='returnmsg' id="carname"></td></tr>
<tr><td>商品价格：</td><td class='returnmsg' id="carprice"></td></tr>
<tr><td>商品描述：</td><td>暂无</td></tr>
<tr><td><a href="javascript:" class="car_href">确认购买</a></td><td><a href="javascript:" class="car_href">加入购物车</a></td></tr>
</table>
<form action="/index.php/Home/Pay/timo" method="post" id="timo">                              <!--任性的取名不要问我为什么-->
<input type="hidden" id="car" name="carname" value=""/>
</form>
</div>


<!--底部背景图-->
<div id="bottom_bgcolor">
<div class="bottom_bg"></div>
</div>

<!--底部介绍-->
<div class="bottom_bg_2">
</div>
<script type="text/javascript" src="/Public/JS/commodity.js"></script>
<script type="text/javascript">                                             //此部分JS 必须为下面两部分JS 上面
var module='/index.php/Home';
var url='/index.php/Home/Pay';
var image='/Public/IMAGES/';
var name="<?php echo (session('user')); ?>";
</script>
<script type="text/javascript" src="/Public/JS/shoppingcar.js"></script>
<script type="text/javascript" src="/Public/JS/introduce.js"></script>
<script type="text/javascript" src="/Public/JS/login.js"></script>
</body>
</html>