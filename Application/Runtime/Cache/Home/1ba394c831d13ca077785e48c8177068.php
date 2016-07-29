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
</style> 
</head>

<body>
<?php if($result == true): ?><table id="table">
<?php if(is_array($result)): foreach($result as $key=>$vo): ?><tr><td>订单编号：</td><td><?php echo ($vo["orderid"]); ?></td></tr>
<tr><td>商品名称：</td><td><?php echo ($vo["commodityname"]); ?></td></tr>
<tr><td>商品价格：</td><td><?php echo ($vo["price"]); ?></td></tr>
<tr><td>下单时间：</td><td><?php echo ($vo["addtime"]); ?></td></tr>
<tr><td>收货人姓名：</td><td><?php echo ($vo["xingming"]); ?></td></tr>
<tr><td>收货地址：</td><td><?php echo ($vo["shengfen"]); ?> <?php echo ($vo["city"]); ?> <?php echo ($vo["street"]); ?></td></tr>
<tr><td>联系电话：</td><td><?php echo ($vo["phone"]); ?></td></tr><?php endforeach; endif; ?>
<tr><td colspan="2" align="center"><?php echo ($prev); ?>&nbsp;<?php echo ($next); ?>&nbsp;<?php echo ($html); ?></td></tr>
</table>
<?php else: ?>
<p id="note">暂无您的订单信息</p><?php endif; ?>
</body>
</html>