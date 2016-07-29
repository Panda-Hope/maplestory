<?php if (!defined('THINK_PATH')) exit();?><!doctype html>
<html>
<head>
<meta charset="utf-8">
<style type="text/css">
#note                                    {color:#999;font-size:60px;display:block;margin:90px auto;text-align:center;}
table                                    {margin:40px auto;}
td                                       {height:40px;color:#666;font-size:20px;border-bottom:1px dotted #999999;}
.msg                                     {display:block;width:120px;height:40px;line-height:40px;text-align:left;}
.page_msg                                {text-decoration:none;color:#666;}
.page_msg:hover                          {color:#3DEBED;}
.last-line a                             {text-decoration:none;display:block;text-align:center;width:60px;height:30px;background:#CCC;margin:0 auto;color:#333;line-height:30px;border-radius:10px;}
.last-line a:hover                       {background:#BBEDFA;}
</style> 
</head>

<body>
<table id="table">
<tr><td>用户名：</td><td><?php echo ($result["name"]); ?></td></tr>
<tr><td>姓名：</td><td><?php echo ($result["xingming"]); ?></td></tr>
<tr><td>省份：</td><td><?php echo ($result["shengfen"]); ?></td></tr>
<tr><td>城市：</td><td><?php echo ($result["city"]); ?></td></tr>
<tr><td>街道：</td><td><?php echo ($result["street"]); ?></td></tr>
<tr><td>QQ：</td><td><?php echo ($result["qq"]); ?> <?php echo ($result["city"]); ?> <?php echo ($result["street"]); ?></td></tr>
<tr><td>邮箱：</td><td><?php echo ($result["mail"]); ?></td></tr>
<tr><td>联系电话：</td><td><?php echo ($result["phone"]); ?></td></tr>
<tr><td class="last-line" colspan="2"><a href="javascript:history.back(-1)">返回</a></td></tr>
</table>
</body>
</html>