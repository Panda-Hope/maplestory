<?php if (!defined('THINK_PATH')) exit();?><!doctype html>
<html>
<head>
<meta charset="utf-8">
<style type="text/css">
table                                    {margin:40px auto;}
td                                       {height:40px;color:#666;font-size:20px;border-bottom:1px dotted #999999;}
.msg                                     {display:block;width:120px;height:40px;line-height:40px;text-align:left;}
.page_msg                                {text-decoration:none;color:#666;}
.page_msg:hover                          {color:#3DEBED;}
</style>
<script type="text/javascript" src="/Public/JS/jquery-1.8.3.min.js"></script>
</head>

<body>
<table id="table">
<?php if(is_array($result)): foreach($result as $key=>$vo): ?><tr><td>用户名：</td><td><?php echo ($vo["name"]); ?></td></tr>
<tr><td>姓名：</td><td><?php echo ($vo["xingming"]); ?></td></tr>
<tr><td>所在省份：</td><td><?php echo ($vo["shengfen"]); ?></td></tr>
<tr><td>所在城市：</td><td><?php echo ($vo["city"]); ?></td></tr>
<tr><td>手机号：</td><td><?php echo ($vo["phone"]); ?></td></tr>
<tr><td>邮箱号：</td><td><?php echo ($vo["mail"]); ?></td></tr><?php endforeach; endif; ?>
</table>
<script>
$('p').click(function() {alert('OK')});
</script>
</body>
</html>