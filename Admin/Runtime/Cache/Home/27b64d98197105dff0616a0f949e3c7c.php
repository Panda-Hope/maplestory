<?php if (!defined('THINK_PATH')) exit();?><!doctype html>
<html>
<head>
<meta charset="utf-8">
<style>
table                        {margin:20px auto;}
td                           {border-bottom:1px dotted #666666;text-align:left;color:#666;height:60px;}
.test                        {margin-left:60px;}
.button                      {border:none;width:60px;height:30px;display:block;border-radius:10px;margin:0 auto;}
.button:hover                {background:#BBEDFA;}
.back_a                      {display:inline-block;text-decoration:none;width:60px;height:30px;background:#CCC;border-radius:10px;text-align:center;line-height:30px;color:#666;margin-left:100px;}
.back_a:hover                {background:#BBEDFA;}
.form_input                  {margin-left:60px;width:150px;height:25px;border-radius:10px;font-size:16px;color:#666;}
</style>
</head>

<body>
<form action="/admin.php/Home/Index/CommodityAction" method="post" enctype="multipart/form-data">
<table>
<tr><td>商品名称：</td><td><input type="text" name="name" class="form_input" /></td></tr>
<tr><td>商品价格</td><td><input type="text" name="price" class="form_input" /></td></tr>
<tr><td>商品类别</td><td>
<select name="type" class="form_input">
<option value="kxzb">酷炫装备</option>
<option value="cwzx">宠物中心</option>
<option value="syxh">实用消耗</option>
</select></td></tr>
<tr><td>商品图片：</td>
<td>
<input type="file" name="pic" class='test' /></form>
</td></tr>
<tr><td><input type="submit" value="添加" class="button" /></td><td><a class="back_a" href="javascript:history.back()">返回</a></td></tr>
</table>
</form>
</body>
</html>